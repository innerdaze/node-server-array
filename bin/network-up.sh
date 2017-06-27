. `dirname $0`/HOSTS.sh

for HOST in "${HOSTS[@]}"
do
  if [[ -z $(ifconfig -uv "lo0" | grep ${HOST}) ]]; then
    ifconfig lo0 alias ${HOST} up && echo ${HOST} is up
  else
    echo ${HOST} is already up
  fi
done

exit 0
