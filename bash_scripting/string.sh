#!/bin/bash

str1="Sad"
str2="Sad"
str3="Happy"

if [ "$str1" == "$str2" ];
then
	echo "$str1 is equal to $str2"
else
	echo "BAD :("
fi
