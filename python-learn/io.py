import os
import sys

current_path = sys.argv[1]
key_word = sys.argv[2]


def search(path, keyword):
    dirs = os.listdir(path)

    for d in dirs:
        abs_path = os.path.abspath(d)
        if os.path.isfile(d):
            if(abs_path.find(keyword) > 0):
                print abs_path
            else:
                pass
        else:
            search(abs_path, keyword)


if(__name__ == '__main__'):
    search(current_path, key_word)
