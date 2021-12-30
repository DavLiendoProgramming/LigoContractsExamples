#!/bin/bash

docker run --rm --name flextesa-sandbox -e block_time=5 --detach -p 20000:20000 oxheadalpha/flextesa:20211221 hangzbox start