import pandas as pd
import os

df = pd.read_excel("empty.xlsx", index_col=None, na_values=['NA'], usecols=None, names=None, header=None).values
for idx, val in enumerate(df):
    filetochange = str(idx + 1) + ".png"
    newname = val[0] + ".png"
    if os.path.exists(filetochange):
      os.rename(filetochange, newname)
