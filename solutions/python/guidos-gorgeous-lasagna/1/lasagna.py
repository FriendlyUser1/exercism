EXPECTED_BAKE_TIME = 40
PREPARATION_TIME = 2

def bake_time_remaining(elapsed_bake_time):
    """"""
    return EXPECTED_BAKE_TIME - elapsed_bake_time

def preparation_time_in_minutes(layers):
    """"""
    return PREPARATION_TIME * layers
    
def elapsed_time_in_minutes(layers, elapsed_bake_time):
    """"""
    return preparation_time_in_minutes(layers) + elapsed_bake_time
    