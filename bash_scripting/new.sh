#!/bin/bash

read -p "Enter a number: " num

if (( ((num > 0)) && ((num <= 2)) ))
then
	echo "$num is greater than 0 and smaller than 3"
else
	echo "BAD!!"
fi
