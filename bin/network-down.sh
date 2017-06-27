. `dirname $0`/HOSTS.sh

for HOST in "${HOSTS[@]}"
do
  if [[ ! -z $(ifconfig -uv "lo0" | grep ${HOST}) ]]; then
    ifconfig lo0 delete ${HOST} && echo ${HOST} is down
  else
    echo ${HOST} is already down
  fi
done

exit 0
