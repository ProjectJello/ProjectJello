Requirements:

* Vagrant 2.0.x
* VirtualBox 5.1.x

# Get Started:

* Install [Vagrant 2.0.x](https://www.vagrantup.com/).
* Clone this repository:
`git clone https://github.com/SPMTeam4/ProjectJello --depth=1`

# Basic Usage:

* `vagrant up` :  When you are ready to spin up the server.
* `vagrant provision` : can be used to bring an existing virtual machine to a ready
state without building from scratch. Useful if you accidentally break the machine,
or if you change some configuration.

# Initial Environment

* The project will have been set up and running on `localhost:8080`.

# Making Changes to the Apache Configuration

The Apache VirtualHost configuration can be found in
`server/provision/roles/apache-server/files`. If you customize it,
make sure to run `vagrant provision`, which will copy it
into the virtual machine and restart Apache.
