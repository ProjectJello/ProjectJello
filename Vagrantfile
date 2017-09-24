# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  config.vm.box = "ubuntu/trusty64"
  config.vm.box_check_update = true
  config.vm.network "forwarded_port", guest: 80, host: 8080

  config.vm.provider "virtualbox" do |vb|

    vb.gui = false
    vb.cpus = 1
    vb.memory = 1024

  end

  config.vm.provision "ansible_local" do |ansible|
    ansible.install = true
    ansible.provisioning_path = "/vagrant/server/provision/"
    ansible.playbook = "configure.yml"
  end

  # During Ansible provisioning, a mounted binding is created from the
  # the virtual machine to the shared folder in order to store the project
  # Node modules in the VM. The following provisioner ensures that this binding
  # is preserved on subsequent boots of the VM.
  config.vm.provision "shell", privileged: true, run: "always" do |shell|
    shell.inline = "mount --bind /home/vagrant/node_modules /vagrant/client/node_modules"
  end

end
