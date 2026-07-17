#!/usr/bin/env bash

zero="No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall."

if [ $# -eq 1 ]; then
	declare -i end=$1
elif [ $# -eq 2 ]; then
	declare -i end=$2
else
	echo "1 or 2 arguments expected"
	exit 1
fi

if [ $1 -lt $end ]; then
	echo "Start must be greater than End"
	exit 1
fi

for ((i = $1; i >= $end; i--)); do
	if [ $i -eq 1 ]; then
		bot="$i bottle"
	elif [ $i -eq 0 ]; then
		bot=" more bottles"
		j="No"
		k="no"
	else
		bot="$i bottles"
	fi

	if [ $i -gt 2 ]; then
		bot2="$(($i - 1)) bottles"
	elif [ $i -eq 1 ]; then
		bot2="no more bottles"
	else
		bot2="$(($i - 1)) bottle"
	fi

	if [ $i -eq 1 ]; then
		onit="it"
	else
		onit="one"
	fi

	if [ $i -eq 0 ]; then
		printf "$zero"
		exit 0
	fi

	printf "$j$bot of beer on the wall, $k$bot of beer.\nTake $onit down and pass it around, $bot2 of beer on the wall.\n\n"
done
