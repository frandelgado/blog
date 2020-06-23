---
title: Actual post
description: The first post is the most memorable one.
date: 2020-05-16T11:00:00.000Z
author: Francisco Delgado
---
# Bash aliases dentro de contenedores
Para el que este acostumbrado a usar bash_aliases y se frutstre de no poder usarlo en containers, le dedique 30 min a ahorrarme infinito tiempo de mi vida y se los paso.

update_aliases.sh
``` bash
#!/bin/bash
# Update container's aliases to the local bash_aliases
# args:
#   $1: docker container name
#
# Copy local bashrc to the docker cointainer
docker cp ~/.bash_aliases  $1:/root/.bash_aliases
#Reload .bashrc
docker exec $1 bash -c '. ~/.bashrc'
``` 

setup_aliases.sh
``` bash
#!/bin/bash
# Add local bash aliases to a container
# args:
#   $1: docker container name
#
# Add bash aliases to  the container's .bashrc
docker exec $1 bash -c "echo 'if [ -f ~/.bash_aliases ]; then . ~/.bash_aliases; fi' >> /root/.bashrc"
# Run update_aliases which will create the bash_aliases file and then reload bashrc
source update_aliases.sh
``` 

Hay dos scripts:
setup_aliases.sh que la corres la 1ra vez que builideas un contenedor
update_aliases.sh que la corres cuando sea que cambies tus alias locales

y listo! no mas `python manage.py shell_plus --ipython`, ahora tenes todos tus shorthands!