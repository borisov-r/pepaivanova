#!/usr/bin/python

'''
Python script for deployment of the website with md5 hash
at the end so that every time there is update the JS and the CSS
are updated automatically
'''

import argparse
import os
import re
import fileinput
from hashlib import md5


def split_argument(argument):
    user_list = argument.split(':')
    password_list = user_list[1].split('@')
    server = password_list[1]
    user_list.pop()
    password_list.pop()
    user = str(user_list).strip("['']")          # remove [ and ' from string
    password = str(password_list).strip("['']")  # remove [ and ' from string
    return [user, password, server]

def parse_arguments():
    # Parse two arguments FTP server and password
    parser = argparse.ArgumentParser(description='Parse variable like this "user:password@server.ftp"')
    parser.add_argument('ftp', help='user:password@server.ftp')
    args = parser.parse_args()
    #print(args.ftp)
    ftp = split_argument(args.ftp)
    #print(ftp)
    return ftp 

def md5_(fname):
    hash_md5 = md5()
    with open(fname,'r') as f:
        temp = f.read()
        hash_md5.update(temp.encode('ascii', 'ignore'))
    return hash_md5.hexdigest()  

def modify_index(old_string, new_string):
    for line in fileinput.input('deploy/index.html', inplace=1):
        line = re.sub(old_string, new_string, line.strip())
        print(line)
    
def main():
    args = parse_arguments()
    print(args)

    os.system('mkdir deploy')
    os.system('mkdir deploy/js')
    os.system('mkdir deploy/css')

    os.system('cp ./index.html ./deploy')
    os.system('cp -R ./js/scripts.js ./deploy/js')
    os.system('cp -R ./css/styles.css ./deploy/css')
    
    # calculate hash tags
    scripts_hash = md5_('deploy/js/scripts.js')
    print(scripts_hash)
    styles_hash = md5_('deploy/css/styles.css')
    print(styles_hash)

    # rename js and css 
    os.renames('deploy/js/scripts.js',('deploy/js/scripts-' + scripts_hash + '.js'))
    os.renames('deploy/css/styles.css',('deploy/css/styles-' + styles_hash + '.css'))

    # open index file and change js and css inside
    scripts_name = 'scripts-' + scripts_hash + '.js'
    styles_name = 'styles-' + styles_hash + '.css'
    modify_index('scripts.js', scripts_name)
    modify_index('styles.css', styles_name)
  
    upload_js = 'curl -T ./deploy/js/' + scripts_name + ' ftp://' + args[2] + '/public_html/js/ --user ' + args[0] + ':' + args[1]
    upload_css = 'curl -T ./deploy/css/' + styles_name + ' ftp://' + args[2] + '/public_html/css/ --user ' + args[0] + ':' + args[1]
    upload_index = 'curl -T ./deploy/index.html ftp://' + args[2] + '/public_html/ --user ' + args[0] + ':' + args[1]

    print(upload_js)
    print(upload_css)
    print(upload_index)

    os.system(upload_js)
    os.system(upload_css)
    os.system(upload_index)


if __name__ == '__main__':
    main()
