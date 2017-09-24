# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.require_version ">= 2.0.0", "< 2.1.0"
Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/trusty64"
  config.vm.box_check_update = true

  config.vm.network "forwarded_port", guest: 80, host: 8080

  config.vm.provider "virtualbox" do |vb|
    vb.name = "Project Jello"
    vb.gui = false
    vb.cpus = 1
    vb.memory = 1024
  end

  config.vm.provision "ansible_local" do |ansible|
    ansible.install = true
    ansible.provisioning_path = "/vagrant/server/provision/"
    ansible.playbook = "configure.yml"
  end

end
