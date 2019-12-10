#!/bin/sh

ENV_FILE=/usr/share/nginx/html/env.js

if [ ! -z $1 ]; then
  ENV_FILE=$1
fi

rm -rf $ENV_FILE

touch $ENV_FILE

echo "window.__ENV__ = {" >> $ENV_FILE 

for line in `env`
do
  if [ ! -z `echo $line | grep REACT_APP` ];
  then
    name=`echo $line | sed 's/=.*//'`
    value=`echo $line | sed 's/.*=//'`
    echo "$name: '$value'," >> $ENV_FILE
  fi
done

echo "};" >> $ENV_FILE