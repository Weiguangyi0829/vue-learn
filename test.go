package main

import "fmt"

func main(){
	a1 := [...]int{1,3,5,7,9}
	sum := 0
	a1n := 5
	for _, x := range a1{
		sum = sum + x
	}
	result := sum / a1n 
	fmt.Println(result)
}