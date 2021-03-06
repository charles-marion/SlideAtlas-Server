import os
#from subprocess import check_output
import subprocess
import inspect

def get_git_name():
    curdir = os.getcwd()
    print curdir
    p = inspect.getfile(get_git_name)
    newdir = os.path.dirname(os.path.abspath(p))
    print newdir
    out = ''
    try:
        params = ["git", "describe", "--tags", "--always"]
        out = subprocess.Popen(params, stdout=subprocess.PIPE).communicate()[0]
    except:
        # Support for particular case when running on windows 
        os.chdir(newdir)
        params = ["C:/PortableGit-1.7.11/bin/git.exe", "describe", "--tags"]
        out = subprocess.Popen(params, stdout=subprocess.PIPE).communicate()[0]
        os.chdir(curdir)

    os.chdir(newdir)
    return out

if __name__ == "__main__":
    print get_git_name()
