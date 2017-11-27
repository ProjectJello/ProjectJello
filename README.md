Requirements:

* Git
* Vagrant 2.0.x
* VirtualBox 5.1.x

# Get Started:

* Install [Git](https://git-scm.com/).
* Clone this repository:
`git clone https://github.com/SPMTeam4/ProjectJello --depth=1`
* Install [VirtualBox 5.1.x](https://www.virtualbox.org/).
* Install [Vagrant 2.0.x](https://www.vagrantup.com/).

# Basic Usage:

* `vagrant up` :  When you are ready to spin up the virtual machine.
* `vagrant halt` : When you are ready to shut down the virtual machine.
* `vagrant ssh` : Allows you to SSH into the virutal machine.
* `vagrant provision` : can be used to bring an existing virtual machine to a ready
state without building from scratch. Useful if you accidentally break the machine,
or if you change some configuration.
* `vagrant destroy` : can be used to completely destroy the virtual machine, if necessary.

# Initial Environment

* The project will have been set up and running on `localhost:8079`.
* NOTE: For the API to correctly work you may need to allow Apache to write files to a specific area of the shared folder.
  This is apparent if you find that you cannot login to Project Jello.
  You can do this by running the following command on your host system:
  `chmod -R 0777 server/app/Data`

# Development

* `start-dev.sh`: This script runs a development server on `localhost:8080`.
* `build-client.sh`: This script builds the frontend assets. You only need to do this if you make
changes to frontend assets while not using the development server.
* `test-client.sh`: This script runs the tests for the client code.

NOTE: On UNIX/Linux systems, the shell scripts may not work (I know...). What should work is to just
copy the contents of the script you want to execute into your shell and execute it there.

# Advanced

## Making Changes to the Apache Configuration

The Apache VirtualHost configuration can be found in
`server/provision/roles/apache-server/files`. If you customize it,
make sure to run `vagrant provision`, which will copy it
into the virtual machine and restart Apache.
