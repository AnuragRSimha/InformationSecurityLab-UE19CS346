#include<stdio.h>
#include<unistd.h>
int main()
{
    printf("\n This is my ls Program\n");
    printf("\n my real Uid is :%d\n My Effective uid is:%d\n", getuid(),geteuid());
    return(0);
}