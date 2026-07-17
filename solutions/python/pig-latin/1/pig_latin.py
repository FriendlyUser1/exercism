def translate(text):
    textarr = text.split()
    vowels = ['a', 'e', 'i', 'o', 'u']
    res = []
    for i in textarr:
        if (i[0] in vowels or (i.startswith("xr") or i.startswith("yt"))):
            res.append(f"{i}ay")
            break
        if (i[1] == "q" and i[2] == "u"):
            res.append(f"{i[3:]}{i[:3]}ay")
            break

        for j in i:
            if j in vowels or j == "y":
                index = i.index(j)

                if index == 0:
                    index = 1

                if (i.startswith("qu") and j == "u"):
                    continue

                res.append(f"{i[(index):]}{i[:index]}ay")
                print(res)
                break

    return " ".join(res)
