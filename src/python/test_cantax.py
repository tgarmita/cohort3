from cantax import tax


def test_negative_value():
    assert tax(-100) == 0


def test_first_bracket():
    assert tax(1.00) == 0.15
    assert tax(2.00) == 0.30


def test_second_bracket():
    assert tax(50000) == 7630.85


def test_third_bracket():
    assert tax(100000) == 18140.66


def test_fourth_bracket():
    assert tax(150000) == 31211.57


def test_fifth_bracket():
    assert tax(250000) == 61796.57
