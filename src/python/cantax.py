def tax(num):
    if num < 0:
        return 0
    elif num <= 47630:
        return num * 0.15
    elif num <= 95259:
        return ((num - 47630) * 0.205) + 7145
    elif num <= 147667:
        return ((num - 95259) * 0.26) + 16908
    elif (num <= 210371):
        return ((num - 147667) * 0.29) + 30535
    else:
        return ((num - 210371) * 0.33) + 48719
