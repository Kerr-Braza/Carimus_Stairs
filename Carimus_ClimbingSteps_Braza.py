'''
    I thought of permutations, recursion, and array implementations first
    but I realized I could just keep looking forward
    For number of steps without keeping track of previous
    Sums of steps taken to reach nth step

    Fib 1 and 2 represent total ways to climb given a certain number of steps
'''


def climbing_stairs(total_steps):
    fib1, fib2 = 1, 1

    for _ in range(total_steps-1):

        fib1, fib2 = fib2, fib1+fib2

    return(fib2)

# For test/display purposes:

# for i in range(10):
#     print("i:", i, "Ways to climb:", climbing_stairs(i))
