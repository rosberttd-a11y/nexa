import { useState, useEffect, useRef } from "react";

const NEXA_LOGO_WHITE = "data:image/png;base64,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";
const NEXA_LOGO_BLUE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATwAAADICAYAAAB1cV29AAABCGlDQ1BJQ0MgUHJvZmlsZQAAeJxjYGA8wQAELAYMDLl5JUVB7k4KEZFRCuwPGBiBEAwSk4sLGHADoKpv1yBqL+viUYcLcKakFicD6Q9ArFIEtBxopAiQLZIOYWuA2EkQtg2IXV5SUAJkB4DYRSFBzkB2CpCtkY7ETkJiJxcUgdT3ANk2uTmlyQh3M/Ck5oUGA2kOIJZhKGYIYnBncAL5H6IkfxEDg8VXBgbmCQixpJkMDNtbGRgkbiHEVBYwMPC3MDBsO48QQ4RJQWJRIliIBYiZ0tIYGD4tZ2DgjWRgEL7AwMAVDQsIHG5TALvNnSEfCNMZchhSgSKeDHkMyQx6QJYRgwGDIYMZAKbWPz9HbOBQAAAdC0lEQVR42u2deZxdRZXHv71kgSISIATBIiwJwkAMSzIYQEEWDYsooiyCA+XoAKOCAw6IiMuMwECQRVGckVELR9kVhYRNCYsioASCLA6GMBJKgURIAqmEmPTr+eNWw8uj0/1e96377nK+n08+3S/9Xt1bp079XlXdqnNAEAShInSICYRGlDZTgTUp+EcvMAL4s3f2+UGu+XZAATXxy6j0Ap3e2UeqWPluaX+hQXh2Ah5Kudi5wLRB3jMPWE9aILN23sw7u6hq9e6UphcaeC3Fsmrh5+Im3vuimD5TfBUrLYInNNIRwb+amUl0iekzpUcETxCEqlATwRMEoSqsEcETBKESeGdlhCcIgiCCJwiCIIInCIIggicIgiCCJwhC26lVteIieIJQPdZUteIieIJQPXpF8ARBEMETwRMEQaa0IniCIBSTnqpWXARPEKrHKhE8QRCqwviqVlwiHgtlZg7wEkmsvd66qVxv+Fdj7QX8NWH001H3Pure19/r3obXA/1tXe+t9VNuT931ehr+3vd7rcnr19e5A1gmgicIJcM7u79YQZAprSAIIniCIAgieIIgCCJ4giAIxaFyDy2UNusDJwKvBsHvCf9W8sZTrb4nZD0kT+5qde9r/L9aeN33e4939ilxrbWQxNqCCF6bOBC4OLKoXuWdPVbcSxBkSttuloefMc8THqO0uUjc63V6xQSCCF576xx7dHua0uYUcTFBEMGrCt9Q2nxUzCAIInhV4SqlzZ5iBkEQwasK9yltthEzCIIIXlX4g9JGiRkEoX1I8IDsGAUsAN4qpigGSpsuYCyggPWAkcA4kn2FI4AxdW9/S/h7b91rBfjwujcMMMYAG5NEZVlTN+iohc+vH665AlhNEuml1tBn16+79grWvc9xBDC67u9rwuvZ3tkLRfCqQTu3SGymtJnvnd1O5CSXAncE8Alg1yBsZZ0BvQJUUvBkSps9k5Q2vxYz5EroTlbaLAauA2aQBMgsY9/oGym+WtW2rqLg5eGY015Km5+I1LRd6A5T2rwAfDOM6KrS37tE8ISsOVxp8x0xQ1RB6xzgb7OBG4HNxFIieEI2nKS0OUt8Ihpd/QjdlkqbRcDBFfa7ygZzEMFrP+cqbT4pZojCqAax2wdYCGwqphHBqwp5PMh+hdLmffLtH0/wlDZ7A3dLlxfBE/LB7UqbyWKGVNkwiN3mwD1iDkGe0uaLeUobmW6lx+rw81ExRe5nOSJ4FaQL+KOYITUmKW3+B1mzEyoseHn/dhurtHlWXDMVfgp8TMxQqFmOCF4FmaC0eVg6w/C/PMSVhKoLXlE69K5Km1vFRYUU6TtatqaqBpApbb45UGlzpfiEkHLbblxVA0h4qPxznNLGeWe/KKbIjL8Bz4XZQI030nf2jZL6/q+37m/rej3Q33rqvoQbr7G64e8M8Plaw301vqfvZw9JCKq7RPCEPHOW0maxd/ZSWUaIyhLgAu/sBeJyMqUV2sslSpvDxQxReB74pHd2YxE7ETwhP/xEabN7AUdjeV43/ZJ3dgvv7PfEvUTwhPzxoNJmK5l+DptfAt3e2XPEpUTwhNZYyRsLyFnwB6XNCDH7kDnbO/te72yPmEIET2id+cDUDK+3HhDrNEbZo+F+1jt7rrisCJ4wdDb0zj4K7JXhNTdX2jwupm+Jy7yz3xQziOAJw2M1gHf2N8CRGV53J6XN3eITTfF77+wp4qoieMLweX0tyDt7PfCZDK+9j9Lmhpz7RB4ehOwpbiqI4KXDWtsuvLPfBrLcz/Vhpc3FJRKntPmqd9aLmwoieBEEL4jemUBWe7tqwKlKmzSOn5VtH95y7+y/iYsKIngRprQNovdJ4LYM2/Ecpc3xwyxrZMmmtJeKewoieBmNYLyzBwFzM7wXq7TZP2eC107OF/cURPAyGOHVid404JkM7+eXSpsdh/jZMu3De0rW7gQRvAxHeHWiNxF4OcN7enSICYHKdIJjlrimIIKXPrUm37cNsCqje+oGFgzhCNroErXLLeKaQtUFL0admxI87+wrwE4Z1nUM4Fr8zHolauuHpIsLVRe8GGs6taYv7uwCYO8M6zteaTO/hfdvUJJ2Xh6+YARhrWlPqihtRgK93tnVTb6/i2TdqIu4+7W6w3RyWoSyV7fyZu/sr5Q2RwDXZ9TOk5Q2D3tnd2vivRuVxLdXhDXMVxu+lPpCoNe/xjsralAlwVPa3AxMDKO+MeFvvcCout+pez3gKFFpUyU71lr9gHf2BqXNycBlGd3jrkqbB7yz0wd5X1mSVo8HFrXwRZ2GD9Tnnqj3i3r/6G0Q295ByqyRZBmrMfB+xt7wvtf68cda+LJf0/B+H76s+8pdEV6vAl4JZS0GlgN/Al4AflfksFr1wnUj2Z0MKBtDGpl6Z7+ltNkcOCuj+3xnE6L3d9KcQ6Iyy0NKmwVBK75dtGWDzrrO933gPvHb7AQv2P2LwBUZ3us7B0nyva80pzAIE4HzgGVKm1uVNtOLcuPd/Tj736Q9W2ZYQ3zv7AlKm3HAhzKc3i4FTiTZq+ZJYvl9j3I9pRXicyBJ/uT/BU7zzuY6eXxnQ8dbDXxW2rBlasMtwDt7OPDrDO95Q+AakvWZ3nDt7aUphSGyA3CL0uaRPI/4OvvpeN8E5kn7ZTfCq7P9u4Hfy5RfKDC7APcrbW5W2qyfe8ELvEfaLdsRXp3o7QwsFJMKBef9gFfafCH3guedXQacLm2W7Qivjq2ApWJWoQScp7R5XGmzSZ5HeHhnvw48Ju2VveCFTbBbk+yDEoSisxPwV6XNIbkVvIBsUch4Stswyt4+RtmC0CZmKW2ObOcNdA7S6V4CzpR2ynxK22f/hcDuYl6hRFw7zAC1UUd4eGcvkKlt9iO8OvvPBQ4tuH06xEWEOoYToDau4AXeJW2U/QivTvRmAceLmYUS8Xuljcql4IXzcqdKG2U/wqtrgx9S3Cfnsg9PaKQL+GNeR3h4Zy8FHpR26pc1WVwkPDk/V740hJKwhdImywRXLUd4kOzt/ZNZpi/v7NnAN0powzHiRpVkN6XNDVldrLvFzlZT2hjARriXe0hicXWHEVMH686v0NHk/w0k6h0DfLazyeuuITls/3iWHuKd/RelzUbAcSVy/PuALRk87luZ6Qj+3w2sHOR9I8IXbWfoJ6/1Y7vu4J8ddUsLI8Nne8P/9/29neGtPqy0+UoWCdOH5FhKm7tI//jZTO/s5+ULr6V2uA2YUYBbvdM7e4C0WCF8an1AkQRQ3ZEkHcERwGaRlzM6gWO8s1fnTvCCYVaTfoj4S7yzp4nbtdQO9xVgqUEEr/h+tjfw78A+kS+1nXf26ViFD2cY+4EI93Oq0ub74l4tTW/3QvZJCvH97F7v7HuAycSN6DMvZnqIzmEY4FaSeGpp83Glzdw8hpbJsTNOAZ4WSwgZ+NoTIaLPibEGk8CCPI7w8M5+lDhRPXYDXlHa/LO4WNNtsR0SVkrIzt++S/KQ6fkIxW+rtImSRD2NJzP7RbJpF3C50uZFpc1J4mJNOeFWwItiCSEjf3Pe2S2ApyIUf5DS5mu5Ezzv7CMkCT1iMR74jtLmJaXNRUqbyeJqA7I5SWo9QchK+HYAfhGh6LOVNoelWWBq+52UNo8CUzK08/MkyWcWActI8mguJznXuookx+bK8LODZM/c0vBzNf3vc+r7HHWffb1dQ/mrCYmOvLMr8uiASpsOkhyi43NyS7/0zr53kHu+m2RPWH1O1/ojafV7zBpzu/bR0/D7SODL3tl7m7DZtcTfA9gbZi4LvbP/2mRbHhL8tiuHrtZLsqdvOfAO4LvE2c83yTubyrpemttKppFsfsxqA+PmfcZoo7D0/donpktI1tHuItli0xZB9M72Km02A/4MbFGQgUKs7Q7vAO4dpB0VcGTGvqO9s0c38dZ/AI6q+CByHimdxOlMsZOtBj5S0QbpBsYB2wH7A+eQxPNv2xEw7yze2beRj/PPzYyalqd8zZ66kflgZB1ZugYcpbS5tIl2PBq4u58RbJXYIKSBzI/ghca5EbhKVjVe5xSlzWNhitku4ZsOfK0AtkrbRn1TwNVZ94MWrvdZpc3pTbThviTrsl0V7kvbK21uypXghcY5FnhWtO51JpNkaJ/QRtH7MklegecqaP9VOb+/mUqbZmIdTpWuxKFKm6/kSvAC06Rt1mIM8KzS5u/bKHpPemcnABfl1EaxfNEXwD+s0mbfQdrvOeBw6Up8dTjJgDojda6/Ah+TtnkTv21nPP/QNv9K8qDn4ZJPaftoZm0wD7H45ihtdhqk7W4EzpduxCylzaZ5+lbFO/tjksfUeXGovPBLpc1BbRa9Bd7ZqcDRwF9KLnhLmnhPXiIyP6q0GTdI230BmCPdiCdzJXihcU4kecLUKe2zFre0W/RC+1wbnuR+DPhTm28n1oL8ywXyiy5gfhPttj9yjHCc0qblHQidGXSqfUmCe8pI782il4tYdt7ZH3tntwHeD8xt0210Ryp3acH8YqzSppmHfm8nbICvMLsrbb6TK8ELHeo9wA9lpPcmbstDNva6dprtnZ1Gsln3+jIYOK+nYQZhQji5NFC9ViEpFwBOUtr8Q64ELzTQ8cAZ0j5vYpbS5n05E4nHvbNHhlHXGWQcwj5FVjb5vjzOPKaEiNYDtdNcQAJrwA+VNtvnSvBCA11IkuPWSxutxe1Km33ydlPe2R7v7IXe2XcAo4APhZH6/CaL6DsZMGBWN6XN6EhVeLnJeubRJ2rADKXNNYPc+3/xxsPBKvNQM29q2wkApc1s4GBpp7W/1b2zhYlerLTZGZgO7EESOGIbYGw/b304PBVeVznjiRPW6hHv7G5N1iXPuXMv9M6eMcj9x8gzUzSe8M5OzqXghUY6DLicNwIBVJ0eQHtnXyhyJZQ2m5Msqk8kOWP8hHd29gDvn9TCqLEVbvLOfrDggteX4Obz3tmZg9RhPm0MppETrvPOHpVLwatrqONJEoRMQPDAJmFRuhIobXYlzkbob3hn/6UEI7w+jvXOXjVIPZYCG1a8D50Rls/eRC6emnpnrwzReg9lkFA+Vej/VO8s8qaRyp1fMjv9uIm13q3J//nh2MxU2rw7t4JXJ3yzvLP7ABuThFh6pqINtpnS5uEK1fetkcp9soS2unugI2je2aUkOWR/T7WZ018isFzui/POLvHOfsk7O5Ekau9pwO8q1Fg9wK5KmxsrUt9YkZn/UFJ7zVPajB2g/ywLmcUMSUTwKtINuMb/7ChaLcJG3aNJkgdtUYGGu8w7e0qp5/DafB34XIQvzo4W7qG3YGZb4p3duMm6fZRkS9G2JA+RxoTBzujwLy3WMPCext5+fm+0e2Po/tXrKKO2jnL6fv4t1O1X3tkP16tgoQhP+2aHhhxd14gbkmyJ2DA0Ziewfqh0jeSc4nrh36g21r0j3M/K4CAdg4z0NqiAqG8Zocw/56Ru1wMvkf4G4Y2UNgtDyK/B+szVwNUIxRO8hoZ8jXKu01SNt0Uo86mc1K3XO/vPSpsppH8UbEulzdyB9jgKayNnW4U8EOOhxSM5qdu48OW8F7AgQvm7KW1+IS4kgidUW/AeyEnduupmJJOIE73lAKXNj8SNRPCEYqAilHlfTuo2suH19pGuc6zSZqa4kgiekGel02arCMWu8s4+n5Mqjqp/4Z1dRHL2OAanN5MFrcp0iwlS67iHALuSPA5vJXpvD/Bq+Nn4xLYvs/sC7+xtJTXdlAhl5imcVeMID+/sA0qbY4iT0nRmeHp7rfRKEbyY7E28eH+Libc5t93sGqHMe3JUv373uXlnr1babA2cF+Ga1yhtFnln75JuKVPaWFwWfsYIJrmmxHbbJUKZs/I8wqsTvf8Aroh03TnNBsUUwRNaxjvrgL9GsunGJTbdzhHaIk8jm1GD3OsJwO2Rrv2o0uYt0jtF8GJxVzs6TcHZNuXy8hYhZUQTAn0g8Fgkv3lWuqUIXix+HqvgMn5TR5py3VI0wQuiN4U4UZ/HKm3+T7qmCF4Mbo5YdhkDJcRIXpS3p5OtPBjcljipF7dW2jwk3VMEL1W8s68QLxzPjiU02XtTLm+Vd/b+Io7wgv+sAHaLdB9T5QiaCF4M7ohU7r4ltNW7Uy4vjx26pa1f3tkniJfc6gCljRXBE9Ik1pnGD5bJSEqbLeg/w9lw+H5JZgq3AidHKv54pc0FInhCWs56O2/kY02TLUN2r7JwTMrl1byzN5bIj74FXByh6BpwhtLmNBE8IS1mRyr3cyWyUdqCd0deK6q06RrK57yznwN+GqnPX6S0OUIET0iDWFErTEmmsyNI/0jZJTmu8oihfjCEJ4+Rz6UGXNdEFjQRPGFQJ72P5NRF2oxW2nytBCb6dMrlLfXO3pGCAMRig2H60+6kn5Cor+/frbTZtip9UwQvHpdFKvcLInhv4vKc1zeNRDkxp59PKm0qkbxbBC/eKO/fIxXdpbS5rsDT2e2BtB++nJtCGTGzlo0ahr32DOk6fx35/ipxGkMELy4/iFTuEevKrF4ALky5vF+EDbt5Zr0hCN0hSps/kkRuPoz0t/A0spHSZn7ZO6QIXlz+MWLZs4tmjJA8+tCUi/1UAao+ukU73UQS4mq7jO9zktJmrgieMNRpLUCshwxjCnhU6MqUy7vfO/t0Aerd1JRWaTNJabMkwpdCK+ymtClrdG0RvAxE78vESwp9QFGe2oZN0x9IudgTUiwr5hreek3YZxpJaKuxOWiuGUqbH5SxP4rgZcOeEcs+W2lzVAFscGvK5d3pnX28IO0/ahCx24Y4e+2Gg1HafF0ETxjKKG8hcU9JXKO02S/Ho7vzSf/J7OEFcoHBprR5XTf7nNLmMyJ4wlBE72LgzoiXuFNpMyOHYrcv8PmUiz0/hOJKk7ZsPFba3AFslGPXvaxMR9BE8LIVvQNIMpDF4jalTW5GPkobDcxJudjnvbNF23w9eh32OY70YwLG4LoCb4MSwWszbydONJU+fpKHBxlKm/HEyS9xUAHbfF3bUr5XoDrcq7SZKIIntDrKWwpMi3yZs8NUqV1itzvJk+nRKRd9iXf20QI2+3r92OhGipcXuvBH0ETw2iN684C9Il/mvUqbFVk/wVXanA08GKEzz/XOxozhFnNbyugGG00mOT1RNEYCTxe574ngtU/0fgNMJk7SlvqRxTVKmweUNjvHrI/SZno4ChVjOr3EOzutwM3dOML7nwLXZZzSprCiJ4LXXtF7giTJ9oLwX7GeFL4TmKe0eVhpk2rgTaXNDKXNb4D7iXcUaocMmiOTjcdKm+nALgV33YlFzYLWIbKTD5Q2t5DdgvwqkvytV5Mcvl/awn1OAPYDDgRmEP9kwDTv7NwM7L+S9Ncc+/iud/bEcJ25xMtMljW3eGcPEcEThtrpvgic04ZLLycJD/R/wAuAB7oABYwB3gpsHX6OzPC+dvfO/i4j28cUvKu8s8cqbd4OPFUyt/2Bd/Yfi3Kz3Qh5muKeq7S5gSQ/w4QML70B8I7wLw8sB3b2zj5TkqbtO2lxfqTye0jWgkdk3KdrwMeVNi8WZW+kCF7+RO8pYCulzcXAqRU0wSPAVO9sb8bXjXm918LPD6VU3t3AtcAc7+wf17HsMJ3k+N0hDDPE/AD0PQM4U2nz55BpTaa0wpCnWRuRhFQ6tCJVviTy1pOBbL2CIQTqbBJLErH4v4dZzjeAM72zr7VYt08A5wHjI5vxSO/s9SJ4wnA742TgUmD/klbxmdBZ5rbRxstJ1ixjcH8Q012G+PlZwKEhvuJw6jgTOD2yKffwzj4ggiek0SknABcAR5ekSkuAL3lnv50D28YUvOFwhnf2whTrOT1MiUdFvOeJeV1/FcErpvBBsr5ngCkFrMJjwEXe2StzZNM8Ct6MFNJP9lfXDcKoetNI9/03YBPv7HIRPCFt590UOAX4OPC2HN/qs8CPgf/0zj6XQzvmTfCib8lR2rwAbBap+EXe2c3y1s4ieOUSv9HAWSTrNKPbfDvPAFcBP2vn2lwLtnuVeE8zW2WvcPQwi3q/TLx4fAu8s5Py1M5ytKxcHA7skQOxA9iEZJF+/5BbdaQ0T1OclJXYBWIe25uotPmtjPCENL+hP0KSzKYIgSQXAw8B95DkpHgoR3Z8heRUSTu50Tt7eBvqvidJ/ttYzPLO5mJrlQheMUXuQ8CJJGdZi8zKMO29JARSqLLgLfXObtTG+h8FXBPxEtY7+3ERPKFZh9wF+ALwQeJuKWgXfwDO8c5eVVHBO9g7e2ubfews4NyIlzjXO3u2CJ4wkBO+D7iQYm4/GQovA1/1zl5WIcGb453dPyf+9m3gUxEvcXI7j6CJ4OV7RHc5yUOIKrIAODqrdb42C95I7+zqHPnebODgiJf4sHf2p+2omzylzafY/YjkEP0eFTbDROB3SpvLM7perU31PCdPYgcQYtzF3Er0E6XN38sIT4TudJIQQvJFtDZ/ItmIuzii7ZcCWSeoWeadHZtjf3TE3cye+RE06Vj5cKzpSpuFwExpk37ZGlgUnk7HorcN9To553bfEng1YvlPKm3WlxFetcTu+yTHwtrFSsABfwEWAa+E6d0Ykg3M40iCkU7IicmihJBS2iwhfrj6ep72zm5XAP/cElgY8RKZHkETwWufI+0E3Em8s4zr4nlgNnATcI939pUW7nkbYB/giPCzXWdPb/bOfqDggvcu7+x9BfHVPYCYpz8yO4ImgtceBzo0CE6WXEeyQP5YivWYQRK44OA2mPGH3tnjU6xLzDOljTzsnZ1aMJ89hiT4Qyx+452NnatZ1ova4DjHZSx2VwCd3tmj0hQ7AO/s7eGJngrXyZLjlDanFdQNji/aDYcN4WdGvMSeSpufywivXGIX+/hOPfcCR3hnF2VYv03DKCDLc727eGcfTeHeXyLJERyb+7yz7yqwD38X+CeSdd4YA6YrvLMnyAiv+GK3b4Zid6p3dp8sxS6MAhZ7Z98HHJvhZe8umCucVGQ/DmJ0cyTtqAH/pLT5mghescVuE2BOBpdaCUzxzl6ag+nPWJLTErEZq7S5siCu8Fvv7ONF9+fwwOjhiHp0ttLm0yJ4xSWLSCAvAhunvU43jE6xLDx5uzODyx2ntJmWwugiNieWxaHDQ5dY21VqwLeUNu8XwSve6O4W4m89+at39q2tpu/LqGMcAPwsg0vdMMzPx45A81vv7LySuffWwLKIA7Gbw1JQashDi7hi9wmGn4t0MHpIEqYsy7ktfgXEXqw3Q00MFCIyjyDOiYsReW+fYbbtW0gS96Q1gOoIft0N1LyzK0TwiuEIK4kfbj16spcU7bGQ5LhSLHKZOEbIDzKljde5P5OB2H2pKGIXmBa5/PGRz9sKInjCOvhy5PIf9M6eUySDhG0yn4/9JSCuJ4jgZTu62594SY772K+ItvHOziR5ohyLXUO6SkEQwcuIMyOXf0GaC7kltM8J4oKCCF52HBCx7GXe2TOLbBzvrCV5CheL48QFBRG8bKazsTvbzJKYanbEsqeKJwoieNkQMxJGzTt7Xkns9J3IXzyHiSsKInjx2Tti2TeVxUje2duAmCdDjhJXFETw4o4qppLsDi/kqKhk09r9xCMFEby4vD9m4d7ZO0pmLxux7PFKm7HikoIIXjzeE7Hsp8pmLO/srMiXmCEuKYjgxWNKxLLnltRm8yKWfZC4pCCCFwGlTRdxQ4Q/WVLT3RKx7OnimYIIXhx2jFy+K6ndYgYI3U7cUhDBi8MOkct/rqR2ezCmfyttthDXFETw0id2IuG/lNFo3llP3P14k8U1BRG89Ik9kni+xLaLOXrdUVxTEMFLn3GRR0LLSmy7+RHL3lJcUxDBS5+YMdh8yW0XM3XhxuKagghesQRvRcltF3PLjQie8DrdYoJUO+0OJAvw3STZr0bxRvq/ZhMmrakTuJ7w+QdKbrsHgMUkma9GpFTmGmAksEhcUxAEQagc/w+W+8hSKOvFlQAAAABJRU5ErkJggg==";


const FORM_URL = "https://tally.so/r/WONe2J";
const DEADLINE = "7 de marzo"; // Fecha de inauguración
const GlobalStyles = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.textContent = `
      :root {
        --navy: #0b1c60;
        --blue: #3560e7;
        --blue-mid: #91afef;
        --blue-light: #d9e3fa;
        --off-white: #f4f7fd;
        --white: #ffffff;
        --gray-50: #f8faff;
        --gray-100: #e8edf8;
        --gray-400: #7b8bb5;
        --gray-600: #4a5578;
        --gray-800: #1e2a4a;
      }
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body { font-family: 'Plus Jakarta Sans', sans-serif; color: var(--navy); background: var(--white); overflow-x: hidden; }
      
      .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.02em; }

      /* ── Spring easing tokens ── */
      /* spring-smooth: gentle overshoot */
      /* spring-pop: noticeable bounce */
      /* spring-snappy: quick settle */

      @keyframes fadeUp {
        0% { opacity: 0; transform: translateY(20px); }
        60% { opacity: 1; transform: translateY(-3px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes fadeScale {
        0% { opacity: 0; transform: scale(0.92) translateY(14px); }
        60% { opacity: 1; transform: scale(1.015) translateY(-2px); }
        100% { opacity: 1; transform: scale(1) translateY(0); }
      }
      @keyframes slideInLeft {
        0% { opacity: 0; transform: translateX(-36px); }
        60% { opacity: 1; transform: translateX(4px); }
        100% { opacity: 1; transform: translateX(0); }
      }
      @keyframes slideInRight {
        0% { opacity: 0; transform: translateX(36px); }
        60% { opacity: 1; transform: translateX(-4px); }
        100% { opacity: 1; transform: translateX(0); }
      }
      @keyframes clipRevealUp {
        0% { clip-path: inset(100% 0 0 0); opacity: 0; transform: translateY(12px); }
        100% { clip-path: inset(0 0 0 0); opacity: 1; transform: translateY(0); }
      }
      @keyframes clipRevealDown {
        0% { clip-path: inset(0 0 100% 0); opacity: 0; }
        100% { clip-path: inset(0 0 0 0); opacity: 1; }
      }
      @keyframes growLine {
        0% { width: 0; opacity: 0; }
        70% { width: 52px; opacity: 1; }
        100% { width: 48px; opacity: 1; }
      }
      @keyframes pulse-soft {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; }
      }
      .animate-fade-up { animation: fadeUp 0.8s cubic-bezier(0.22, 1.2, 0.36, 1) forwards; }
      .animate-fade-in { animation: fadeIn 0.7s cubic-bezier(0.22, 1.2, 0.36, 1) forwards; }
      .animate-slide-left { animation: slideInLeft 0.8s cubic-bezier(0.22, 1.2, 0.36, 1) forwards; }
      .delay-100 { animation-delay: 0.1s; }
      .delay-200 { animation-delay: 0.2s; }
      .delay-300 { animation-delay: 0.3s; }
      .delay-400 { animation-delay: 0.4s; }
      .delay-500 { animation-delay: 0.5s; }
      .delay-600 { animation-delay: 0.6s; }

      .gradient-text {
        background: linear-gradient(135deg, var(--navy) 0%, var(--blue) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .glass-card {
        background: rgba(255,255,255,0.7);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(145,175,239,0.2);
      }

      .hero-gradient {
        background: 
          radial-gradient(ellipse 80% 60% at 70% 20%, rgba(53,96,231,0.08) 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 20% 80%, rgba(145,175,239,0.06) 0%, transparent 50%),
          var(--white);
      }

      .section-divider {
        width: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--blue), var(--blue-mid));
        border-radius: 2px;
      }
      .section-divider.visible {
        animation: growLine 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }

      .nav-blur {
        background: rgba(255,255,255,0.85);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
      }

      .plan-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 60px rgba(11,28,96,0.1);
      }
      .plan-card { transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1); }

      .faq-answer {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), padding 0.3s ease;
      }
      .faq-answer.open {
        max-height: 300px;
        padding-bottom: 20px;
      }

      .btn-primary {
        background: linear-gradient(135deg, var(--navy) 0%, var(--blue) 100%);
        color: white;
        border: none;
        padding: 14px 36px;
        border-radius: 8px;
        font-weight: 600;
        font-size: 15px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: 'Plus Jakarta Sans', sans-serif;
        letter-spacing: 0.01em;
      }
      .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(53,96,231,0.3);
      }

      .btn-outline {
        background: transparent;
        color: var(--navy);
        border: 1.5px solid var(--blue-mid);
        padding: 13px 34px;
        border-radius: 8px;
        font-weight: 600;
        font-size: 15px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      .btn-outline:hover {
        border-color: var(--blue);
        background: var(--blue-light);
      }

      .dot-pattern {
        background-image: radial-gradient(circle, rgba(53,96,231,0.07) 1px, transparent 1px);
        background-size: 24px 24px;
      }

      @media (max-width: 768px) {
        .hero-title { font-size: 48px !important; line-height: 1.05 !important; }
        .section-title { font-size: 36px !important; }
        .nav-links { display: none !important; }
        .grid-2 { grid-template-columns: 1fr !important; }
        .grid-3 { grid-template-columns: 1fr !important; }
        .hero-ctas { flex-direction: column !important; }
        .px-resp { padding-left: 20px !important; padding-right: 20px !important; }
        .problem-connector { display: none !important; }
        .problem-node { display: none !important; }
        .problem-hline { display: none !important; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, []);
  return null;
};

// ─── INTERSECTION OBSERVER HOOK ─────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ─── ICONS (inline SVG) ─────────────────────────────────────────────
const Icon = ({ name, size = 24, color = "currentColor" }) => {
  const icons = {
    shield: <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 2.18l7 3.82v4c0 4.62-3.2 8.93-7 10.01C8.2 20.93 5 16.62 5 12V8l7-3.82z" fill={color}/>,
    target: <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-14a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" fill={color}/>,
    zap: <path d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>,
    heart: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="none" stroke={color} strokeWidth="2"/>,
    users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" fill="none" stroke={color} strokeWidth="2"/><circle cx="9" cy="7" r="4" fill="none" stroke={color} strokeWidth="2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" fill="none" stroke={color} strokeWidth="2"/></>,
    activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>,
    check: <path d="M20 6L9 17l-5-5" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>,
    chevron: <path d="M6 9l6 6 6-6" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>,
    arrow: <><line x1="5" y1="12" x2="19" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round"/><polyline points="12 5 19 12 12 19" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>,
    menu: <><line x1="3" y1="6" x2="21" y2="6" stroke={color} strokeWidth="2" strokeLinecap="round"/><line x1="3" y1="12" x2="21" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round"/><line x1="3" y1="18" x2="21" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round"/></>,
    x: <><line x1="18" y1="6" x2="6" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round"/><line x1="6" y1="6" x2="18" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round"/></>,
    trending: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="17 6 23 6 23 12" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>,
    clipboard: <><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" fill="none" stroke={color} strokeWidth="2"/><rect x="8" y="2" width="8" height="4" rx="1" fill="none" stroke={color} strokeWidth="2"/></>,
    star: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill={color}/>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">{icons[name]}</svg>;
};

// ─── NAVBAR ─────────────────────────────────────────────────────────
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Nexa Origen", href: "#origen" },
    { label: "Solución", href: "#solucion" },
    { label: "Para quién", href: "#paraquien" },
    { label: "Planes", href: "#planes" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(145,175,239,0.15)" : "1px solid transparent",
        transition: "all 0.4s ease",
      }}
    >
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "16px 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }} className="px-resp">
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <img src={scrolled ? NEXA_LOGO_BLUE : NEXA_LOGO_WHITE} alt="Nexa" style={{ height: 40, width: "auto", objectFit: "contain" }} />
        </a>

        {/* Desktop Links */}
        <div className="nav-links" style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} style={{
              textDecoration: "none", color: scrolled ? "var(--gray-600)" : "rgba(255,255,255,0.7)", fontSize: 14, fontWeight: 500,
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => e.target.style.color = scrolled ? "var(--blue)" : "white"}
            onMouseLeave={(e) => e.target.style.color = scrolled ? "var(--gray-600)" : "rgba(255,255,255,0.7)"}
            >{l.label}</a>
          ))}
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "10px 24px", fontSize: 14, textDecoration: "none" }}>
            Pre-inscríbete
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer" }}
          className="nav-menu-btn"
        >
          <Icon name={menuOpen ? "x" : "menu"} color="var(--navy)" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          padding: "16px 32px 24px", display: "flex", flexDirection: "column", gap: 16,
          background: "white", borderTop: "1px solid var(--gray-100)",
        }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{
              textDecoration: "none", color: "var(--gray-600)", fontSize: 15, fontWeight: 500,
            }}>{l.label}</a>
          ))}
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 8, textDecoration: "none", textAlign: "center" }}>Pre-inscríbete</a>
        </div>
      )}
    </nav>
  );
};

// ─── HERO ───────────────────────────────────────────────────────────
const Hero = () => {
  const [ref, inView] = useInView(0.1);

  // Dot grid component
  const DotGrid = ({ rows, cols, style }) => (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 8px)`, gap: 8, ...style }}>
      {Array.from({ length: rows * cols }).map((_, i) => (
        <div key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(145,175,239,0.25)" }} />
      ))}
    </div>
  );

  return (
    <section ref={ref} style={{
      position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center",
      background: "linear-gradient(160deg, #060e2e 0%, #0b1c60 40%, #122470 100%)",
    }}>
      {/* Subtle radial glow */}
      <div style={{
        position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
        width: 800, height: 600, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(53,96,231,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Large faded background text */}
      <div className="font-display" style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        fontSize: 280, color: "rgba(53,96,231,0.04)", letterSpacing: 20, whiteSpace: "nowrap",
        pointerEvents: "none", userSelect: "none",
      }}>NEXA</div>

      {/* Dot grid top-right */}
      <DotGrid rows={5} cols={7} style={{
        position: "absolute", top: 140, right: 80,
        opacity: inView ? 1 : 0, animation: inView ? "fadeIn 1s cubic-bezier(0.22, 1.2, 0.36, 1) 0.5s forwards" : "none",
      }} />

      {/* Dot grid bottom-left */}
      <DotGrid rows={6} cols={3} style={{
        position: "absolute", bottom: 160, left: 60,
        opacity: inView ? 1 : 0, animation: inView ? "fadeIn 1s cubic-bezier(0.22, 1.2, 0.36, 1) 0.6s forwards" : "none",
      }} />

      {/* Decorative ring */}
      <div style={{
        position: "absolute", top: "10%", right: "15%",
        width: 180, height: 180, borderRadius: "50%",
        border: "1px solid rgba(145,175,239,0.07)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "12%",
        width: 120, height: 120, borderRadius: "50%",
        border: "1px solid rgba(145,175,239,0.06)",
        pointerEvents: "none",
      }} />

      {/* Main content - centered */}
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "160px 32px 120px",
        position: "relative", textAlign: "center", width: "100%",
      }} className="px-resp">

        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          border: "1px solid rgba(145,175,239,0.25)", borderRadius: 100, padding: "8px 20px",
          fontSize: 13, fontWeight: 600, color: "var(--blue-mid)", marginBottom: 40,
          background: "rgba(53,96,231,0.08)",
          opacity: inView ? 1 : 0, animation: inView ? "fadeUp 0.6s cubic-bezier(0.22, 1.2, 0.36, 1) forwards" : "none",
        }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--blue-mid)", animation: "pulse-soft 2s infinite" }} />
          Pre-inscripción abierta — Nexa Origen
        </div>

        {/* Title - line by line reveal */}
        <h1 className="font-display hero-title" style={{
          fontSize: 76, lineHeight: 1.0, color: "white", marginBottom: 28,
          maxWidth: 900, margin: "0 auto 28px",
        }}>
          <span style={{
            display: "block", overflow: "hidden",
          }}>
            <span style={{
              display: "block",
              opacity: inView ? 1 : 0,
              animation: inView ? "clipRevealUp 0.9s cubic-bezier(0.22, 1.2, 0.36, 1) 0.15s forwards" : "none",
            }}>
              SÉ PARTE DEL INICIO
            </span>
          </span>
          <span style={{ display: "block", overflow: "hidden" }}>
            <span style={{
              display: "block",
              background: "linear-gradient(135deg, #3560e7, #91afef, #d9e3fa)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              opacity: inView ? 1 : 0,
              animation: inView ? "clipRevealUp 0.9s cubic-bezier(0.22, 1.2, 0.36, 1) 0.35s forwards" : "none",
            }}>
              DE UNA NUEVA FORMA DE ENTRENAR
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,0.5)", maxWidth: 560, margin: "0 auto 32px",
          fontWeight: 400,
          opacity: inView ? 1 : 0, animation: inView ? "fadeUp 0.7s cubic-bezier(0.22, 1.2, 0.36, 1) 0.25s forwards" : "none",
        }}>
          Nexa integra entrenamiento estructurado, prevención de lesiones y recuperación profesional en un solo lugar. Inscríbete antes del {DEADLINE} y sé parte de Nexa Origen con beneficios exclusivos.
        </p>

        {/* Deadline badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 8, padding: "10px 20px", marginBottom: 32,
          opacity: inView ? 1 : 0, animation: inView ? "fadeUp 0.7s cubic-bezier(0.22, 1.2, 0.36, 1) 0.3s forwards" : "none",
        }}>
          <Icon name="zap" size={16} color="#91afef" />
          <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>
            Inscripciones abiertas hasta el <span style={{ color: "white" }}>{DEADLINE}</span> — Inauguración
          </span>
        </div>

        {/* CTAs */}
        <div className="hero-ctas" style={{
          display: "flex", gap: 16, alignItems: "center", justifyContent: "center",
          opacity: inView ? 1 : 0, animation: inView ? "fadeUp 0.7s cubic-bezier(0.22, 1.2, 0.36, 1) 0.35s forwards" : "none",
        }}>
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" style={{
            background: "white", color: "var(--navy)", border: "none",
            padding: "15px 36px", borderRadius: 8, fontSize: 15, fontWeight: 700,
            cursor: "pointer", transition: "all 0.3s", fontFamily: "'Plus Jakarta Sans', sans-serif",
            display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none",
          }}>
            Quiero ser parte de Nexa Origen <Icon name="arrow" size={18} color="var(--navy)" />
          </a>
          <a href="#origen" style={{
            background: "transparent", color: "white",
            border: "1.5px solid rgba(145,175,239,0.3)",
            padding: "14px 34px", borderRadius: 8, fontSize: 15, fontWeight: 600,
            cursor: "pointer", transition: "all 0.3s", fontFamily: "'Plus Jakarta Sans', sans-serif",
            textDecoration: "none",
          }}>
            Ver beneficios
          </a>
        </div>

        {/* Pillars - glassmorphism cards */}
        <div className="grid-3" style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16,
          marginTop: 72,
        }}>
          {[
            { icon: "clipboard", title: "Entrenamiento", desc: "Estructurado y con criterio profesional" },
            { icon: "shield", title: "Prevención", desc: "Cuidamos tu cuerpo mientras progresas" },
            { icon: "heart", title: "Recuperación", desc: "Integrada al proceso, no separada" },
          ].map((p, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(145,175,239,0.12)",
              borderRadius: 16, padding: "28px 24px",
              display: "flex", alignItems: "flex-start", gap: 16,
              transition: "background 0.3s ease, border-color 0.3s ease, transform 0.3s ease",
              opacity: inView ? 1 : 0,
              animation: inView ? `fadeScale 0.7s cubic-bezier(0.34, 1.4, 0.64, 1) ${0.5 + i * 0.12}s forwards` : "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.09)";
              e.currentTarget.style.borderColor = "rgba(145,175,239,0.25)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.borderColor = "rgba(145,175,239,0.12)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                background: "linear-gradient(135deg, rgba(53,96,231,0.3), rgba(145,175,239,0.15))",
                border: "1px solid rgba(145,175,239,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon name={p.icon} size={20} color="#91afef" />
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: "white", marginBottom: 4 }}>{p.title}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.5, fontWeight: 400 }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom curved divider */}
      <div style={{
        position: "absolute", bottom: -2, left: 0, right: 0,
      }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 60V30C240 5 480 0 720 10C960 20 1200 40 1440 30V60H0Z" fill="var(--gray-50)" />
        </svg>
      </div>
    </section>
  );
};

// ─── NEXA ORIGEN (PRE-INSCRIPTION BENEFITS) ────────────────────────
const NexaOrigen = () => {
  const [ref, inView] = useInView();

  const benefits = [
    {
      icon: "star",
      title: "Invitación a la inauguración",
      desc: "Acceso al evento de apertura el 7 de marzo + experiencia de bienvenida exclusiva.",
    },
    {
      icon: "heart",
      title: 'Medias edición limitada "Nexa Origen"',
      desc: "Medias con el logo + detalle que identifica que perteneces al grupo inicial. Solo para quienes se inscriban antes de inaugurar.",
    },
    {
      icon: "activity",
      title: "1 sesión de Nexa Recovery",
      desc: "Descarga + movilidad asistida según evaluación. Ideal para soltar tensión y entrar a entrenar mejor.",
    },
    {
      icon: "trending",
      title: "Onboarding prioritario",
      desc: "Prioridad para agendar tu evaluación inicial y organizar tus primeras semanas en Nexa.",
    },
    {
      icon: "clipboard",
      title: "Acceso preferente a cupos de marzo",
      desc: "Priorización para elegir horarios disponibles según tu plan.",
    },
  ];

  const steps = [
    { num: "01", text: "Te registras y apartas tu cupo en el plan." },
    { num: "02", text: "Coordinamos tu evaluación inicial, tu agenda de marzo y tu Nexa Recovery." },
    { num: "03", text: "Asistes a la inauguración y recibes tus medias Nexa Origen." },
  ];

  return (
    <section id="origen" ref={ref} style={{
      padding: "100px 32px",
      background: "linear-gradient(180deg, var(--white) 0%, var(--blue-light) 40%, var(--blue-light) 60%, var(--white) 100%)",
      position: "relative",
    }} className="px-resp">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 56px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "var(--navy)", borderRadius: 100, padding: "8px 20px",
            fontSize: 12, fontWeight: 700, color: "white", marginBottom: 24,
            textTransform: "uppercase", letterSpacing: 1.5,
            opacity: inView ? 1 : 0, animation: inView ? "fadeUp 0.6s cubic-bezier(0.22, 1.2, 0.36, 1) forwards" : "none",
          }}>
            <Icon name="zap" size={14} color="var(--blue-mid)" />
            Beneficios exclusivos — Pre-inscripción
          </div>
          <h2 className="font-display section-title" style={{
            fontSize: 52, color: "var(--navy)", lineHeight: 1.02, marginBottom: 16,
            opacity: inView ? 1 : 0, animation: inView ? "clipRevealUp 1s cubic-bezier(0.22, 1.2, 0.36, 1) 0.1s forwards" : "none",
          }}>
            NEXA{" "}
            <span className="gradient-text">ORIGEN</span>
          </h2>
          <p style={{
            fontSize: 17, color: "var(--gray-600)", lineHeight: 1.7,
            opacity: inView ? 1 : 0, animation: inView ? "fadeUp 0.7s cubic-bezier(0.22, 1.2, 0.36, 1) 0.2s forwards" : "none",
          }}>
            Reserva tu cupo antes de inaugurar y entra en marzo con ventajas exclusivas.
          </p>
        </div>

        {/* Section label */}
        <p style={{
          fontSize: 14, fontWeight: 700, color: "var(--navy)", marginBottom: 24, textAlign: "center",
          opacity: inView ? 1 : 0, animation: inView ? "fadeUp 0.6s cubic-bezier(0.22, 1.2, 0.36, 1) 0.25s forwards" : "none",
        }}>
          ¿Qué obtienes al inscribirte antes del {DEADLINE}?
        </p>

        {/* Benefits - top row 3, bottom row 2 centered */}
        <div style={{ marginBottom: 64 }}>
          <div className="grid-3" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 20,
          }}>
            {benefits.slice(0, 3).map((b, i) => (
              <div key={i} className="glass-card" style={{
                padding: 32, borderRadius: 18, position: "relative", overflow: "hidden",
                opacity: inView ? 1 : 0,
                animation: inView ? `fadeScale 0.65s cubic-bezier(0.34, 1.4, 0.64, 1) ${0.3 + i * 0.12}s forwards` : "none",
              }}>
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: "linear-gradient(90deg, var(--blue), var(--blue-mid))",
                }} />
                <div style={{
                  width: 48, height: 48, borderRadius: 14, marginBottom: 18,
                  background: "linear-gradient(135deg, var(--navy), var(--blue))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon name={b.icon} size={22} color="white" />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--navy)", marginBottom: 8 }}>{b.title}</h3>
                <p style={{ fontSize: 13.5, color: "var(--gray-600)", lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid-2" style={{
            display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20,
            maxWidth: 800, margin: "0 auto",
          }}>
            {benefits.slice(3).map((b, i) => (
              <div key={i} className="glass-card" style={{
                padding: 32, borderRadius: 18, position: "relative", overflow: "hidden",
                opacity: inView ? 1 : 0,
                animation: inView ? `fadeScale 0.65s cubic-bezier(0.34, 1.4, 0.64, 1) ${0.66 + i * 0.12}s forwards` : "none",
              }}>
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: "linear-gradient(90deg, var(--blue), var(--blue-mid))",
                }} />
                <div style={{
                  width: 48, height: 48, borderRadius: 14, marginBottom: 18,
                  background: "linear-gradient(135deg, var(--navy), var(--blue))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon name={b.icon} size={22} color="white" />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--navy)", marginBottom: 8 }}>{b.title}</h3>
                <p style={{ fontSize: 13.5, color: "var(--gray-600)", lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div style={{
          maxWidth: 700, margin: "0 auto 56px",
          background: "rgba(255,255,255,0.85)", backdropFilter: "blur(20px)",
          border: "1px solid rgba(145,175,239,0.2)",
          borderRadius: 20, padding: "40px 40px 32px", 
          opacity: inView ? 1 : 0,
          animation: inView ? "fadeScale 0.7s cubic-bezier(0.34, 1.4, 0.64, 1) 0.7s forwards" : "none",
        }}>
          <h3 style={{
            fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2,
            color: "var(--blue)", marginBottom: 28, textAlign: "center",
          }}>
            Cómo funciona
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {steps.map((s, i) => (
              <div key={i} style={{
                display: "flex", gap: 20, alignItems: "flex-start",
                padding: "16px 0",
                borderBottom: i < steps.length - 1 ? "1px solid var(--gray-100)" : "none",
              }}>
                <span className="font-display" style={{
                  fontSize: 32, color: "var(--blue-mid)", lineHeight: 1, minWidth: 44,
                }}>{s.num}</span>
                <p style={{ fontSize: 15, color: "var(--gray-800)", lineHeight: 1.6, fontWeight: 500, paddingTop: 4 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          textAlign: "center",
          opacity: inView ? 1 : 0,
          animation: inView ? "fadeUp 0.7s cubic-bezier(0.22, 1.2, 0.36, 1) 0.8s forwards" : "none",
        }}>
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{
            display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none",
            padding: "16px 40px", fontSize: 16,
          }}>
            Quiero ser parte de Nexa Origen <Icon name="arrow" size={18} color="white" />
          </a>
          <p style={{ fontSize: 13, color: "var(--gray-400)", marginTop: 14 }}>
            Beneficios exclusivos para inscripciones antes del {DEADLINE}.
          </p>
        </div>
      </div>
    </section>
  );
};

// ─── PROBLEM ────────────────────────────────────────────────────────
const Problem = () => {
  const [ref, inView] = useInView();
  const problems = [
    { icon: "zap", title: "Sin estructura", desc: "Entrenas fuerte pero sin un plan profesional. El progreso se estanca y las molestias aparecen." },
    { icon: "activity", title: "Molestias recurrentes", desc: "Arrastras dolores por entrenar sin criterio. Tu cuerpo te pasa factura." },
    { icon: "shield", title: "Sin conexión", desc: "Sales de fisioterapia y no sabes cómo volver a entrenar con seguridad." },
    { icon: "target", title: "Rendimiento limitado", desc: "Quieres mejorar tu desempeño deportivo pero no tienes acompañamiento real." },
  ];

  return (
    <section id="problema" ref={ref} style={{
      padding: "100px 32px",
      background: "linear-gradient(160deg, #060e2e 0%, #0b1c60 50%, #0f2050 100%)",
      position: "relative", overflow: "hidden",
    }} className="px-resp">
      {/* Subtle background glow */}
      <div style={{
        position: "absolute", top: "30%", right: "-10%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(53,96,231,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      {/* Decorative ring */}
      <div style={{
        position: "absolute", bottom: "5%", left: "5%",
        width: 200, height: 200, borderRadius: "50%",
        border: "1px solid rgba(145,175,239,0.06)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        {/* Header - centered */}
        <div style={{
          textAlign: "center", maxWidth: 600, margin: "0 auto 72px",
        }}>
          <p style={{
            fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2,
            color: "var(--blue-mid)", marginBottom: 16,
            opacity: inView ? 1 : 0, animation: inView ? "fadeUp 0.6s cubic-bezier(0.34, 1.4, 0.64, 1) forwards" : "none",
          }}>
            El problema
          </p>
          <h2 className="font-display section-title" style={{
            fontSize: 48, color: "white", lineHeight: 1.05, marginBottom: 18,
            opacity: inView ? 1 : 0, animation: inView ? "clipRevealUp 1s cubic-bezier(0.22, 1.2, 0.36, 1) 0.1s forwards" : "none",
          }}>
            ¿RECONOCES ESTO?
          </h2>
          <p style={{
            fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.7,
            opacity: inView ? 1 : 0, animation: inView ? "fadeUp 0.7s cubic-bezier(0.34, 1.4, 0.64, 1) 0.2s forwards" : "none",
          }}>
            Muchas personas entrenan con intensidad pero sin la estructura ni el acompañamiento que su cuerpo necesita.
          </p>
        </div>

        {/* Problems - alternating layout with connecting line */}
        <div style={{ position: "relative", maxWidth: 900, margin: "0 auto" }}>
          {/* Vertical connecting line - centered */}
          <div className="problem-connector" style={{
            position: "absolute", left: "50%", top: 30, bottom: 30,
            width: 1,
            background: "linear-gradient(180deg, transparent 0%, rgba(145,175,239,0.2) 10%, rgba(145,175,239,0.2) 90%, transparent 100%)",
            transform: "translateX(-50%)",
            opacity: inView ? 1 : 0,
            animation: inView ? "fadeIn 1s cubic-bezier(0.34, 1.4, 0.64, 1) 0.2s forwards" : "none",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {problems.map((p, i) => {
              const isRight = i % 2 !== 0;
              return (
                <div key={i} style={{
                  display: "flex", alignItems: "center",
                  justifyContent: isRight ? "flex-end" : "flex-start",
                  position: "relative",
                }}>
                  {/* Node dot on the center line */}
                  <div className="problem-node" style={{
                    position: "absolute", left: "50%", top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 10, height: 10, borderRadius: "50%",
                    background: "var(--blue)", border: "2px solid rgba(145,175,239,0.3)",
                    boxShadow: "0 0 12px rgba(53,96,231,0.3)",
                    zIndex: 2,
                    opacity: inView ? 1 : 0,
                    animation: inView ? `fadeScale 0.5s cubic-bezier(0.34, 1.4, 0.64, 1) ${0.3 + i * 0.13}s forwards` : "none",
                  }} />

                  {/* Horizontal connector from dot to card edge */}
                  <div className="problem-hline" style={{
                    position: "absolute",
                    top: "50%",
                    left: isRight ? "calc(50% + 5px)" : "auto",
                    right: isRight ? "auto" : "calc(50% + 5px)",
                    width: "calc(50% - 420px - 5px)",
                    minWidth: 0,
                    height: 1,
                    background: "rgba(145,175,239,0.15)",
                    transform: "translateY(-50%)",
                    opacity: inView ? 1 : 0,
                    animation: inView ? `fadeIn 0.6s cubic-bezier(0.34, 1.4, 0.64, 1) ${0.35 + i * 0.13}s forwards` : "none",
                  }} />

                  <div style={{
                    opacity: inView ? 1 : 0,
                    animation: inView
                      ? `${isRight ? "slideInRight" : "slideInLeft"} 0.65s cubic-bezier(0.34, 1.4, 0.64, 1) ${0.25 + i * 0.13}s forwards`
                      : "none",
                  }}>
                    <div style={{
                    maxWidth: 420, padding: "28px 32px", borderRadius: 18,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(145,175,239,0.1)",
                    backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
                    display: "flex", gap: 20, alignItems: "flex-start",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.borderColor = "rgba(145,175,239,0.2)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.borderColor = "rgba(145,175,239,0.1)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                  >
                    <div style={{
                      width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                      background: "linear-gradient(135deg, rgba(53,96,231,0.3), rgba(145,175,239,0.12))",
                      border: "1px solid rgba(145,175,239,0.12)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon name={p.icon} size={20} color="#91afef" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: "white", marginBottom: 6 }}>{p.title}</h3>
                      <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>{p.desc}</p>
                    </div>
                  </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom transition text */}
        <div style={{
          textAlign: "center", marginTop: 56,
          opacity: inView ? 1 : 0,
          animation: inView ? "fadeUp 0.7s cubic-bezier(0.34, 1.4, 0.64, 1) 0.8s forwards" : "none",
        }}>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.35)", fontWeight: 500, fontStyle: "italic" }}>
            Si algo de esto te suena, Nexa fue pensado para ti.
          </p>
        </div>
      </div>
    </section>
  );
};

// ─── SOLUTION ───────────────────────────────────────────────────────
const Solution = () => {
  const [ref, inView] = useInView();
  const pillars = [
    { icon: "clipboard", title: "Entrenamiento estructurado", desc: "Cada sesión tiene un propósito. Programación con criterio profesional adaptada a tus objetivos y capacidades." },
    { icon: "shield", title: "Prevención activa", desc: "Cuidamos la carga, la técnica y la recuperación. Entrenamos para rendir más y lesionarnos menos." },
    { icon: "heart", title: "Recuperación integrada", desc: "Fisioterapia disponible cuando se necesita, no separada del proceso. Todo conectado." },
  ];

  return (
    <section id="solucion" ref={ref} style={{ padding: "100px 32px", background: "var(--white)", position: "relative" }} className="px-resp">
      <div className="dot-pattern" style={{
        position: "absolute", top: 0, right: 0, width: "40%", height: "100%", opacity: 0.5,
      }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 64px" }}>
          <div className={`section-divider ${inView ? "visible" : ""}`} style={{ margin: "0 auto 20px" }} />
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "var(--blue)", marginBottom: 12 }}>
            La solución
          </p>
          <h2 className="font-display section-title" style={{
            fontSize: 44, color: "var(--navy)", lineHeight: 1.05, marginBottom: 16,
            opacity: inView ? 1 : 0, animation: inView ? "clipRevealUp 1s cubic-bezier(0.22, 1.2, 0.36, 1) 0.1s forwards" : "none",
          }}>
            ENTRENAMIENTO, RENDIMIENTO Y CUIDADO DEL CUERPO. ALINEADOS.
          </h2>
          <p style={{ fontSize: 16, color: "var(--gray-600)", lineHeight: 1.7 }}>
            Nexa es donde se entrena con criterio. Donde el rendimiento y la salud no compiten — conviven.
          </p>
        </div>

        <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          {pillars.map((p, i) => (
            <div key={i} style={{
              padding: 40, borderRadius: 20, background: i === 1 ? "var(--navy)" : "var(--gray-50)",
              opacity: inView ? 1 : 0,
              animation: inView ? `fadeScale 0.7s cubic-bezier(0.34, 1.4, 0.64, 1) ${0.1 + i * 0.15}s forwards` : "none",
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: i === 1 ? "rgba(53,96,231,0.25)" : "var(--blue-light)",
                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24,
              }}>
                <Icon name={p.icon} size={24} color={i === 1 ? "#91afef" : "var(--blue)"} />
              </div>
              <h3 style={{
                fontSize: 20, fontWeight: 700, marginBottom: 12,
                color: i === 1 ? "white" : "var(--navy)",
              }}>{p.title}</h3>
              <p style={{
                fontSize: 15, lineHeight: 1.7,
                color: i === 1 ? "rgba(255,255,255,0.7)" : "var(--gray-600)",
              }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── FOR WHO ────────────────────────────────────────────────────────
const ForWho = () => {
  const [ref, inView] = useInView();
  const audiences = [
    {
      tag: "Prioritario",
      title: "Personas activas y deportistas",
      desc: "Disfrutas entrenar y quieres hacerlo mejor. Buscas estructura, rendimiento y un espacio serio donde progresar.",
      features: ["Entrenar con criterio profesional", "Mejorar rendimiento deportivo", "Prevenir lesiones", "Seguimiento y estructura real"],
    },
    {
      tag: "Bienestar",
      title: "Adultos activos con molestias",
      desc: "Quieres mantenerte activo sin que las molestias te detengan. Valoras la seguridad y el cuidado de tu cuerpo.",
      features: ["Entrenamiento guiado y seguro", "Control y corrección técnica", "Continuidad post-terapia", "Confianza para moverse mejor"],
    },
  ];

  return (
    <section id="paraquien" ref={ref} style={{ padding: "100px 32px", background: "var(--gray-50)" }} className="px-resp">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 64px" }}>
          <div className={`section-divider ${inView ? "visible" : ""}`} style={{ margin: "0 auto 20px" }} />
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "var(--blue)", marginBottom: 12 }}>
            Para quién
          </p>
          <h2 className="font-display section-title" style={{
            fontSize: 44, color: "var(--navy)", lineHeight: 1.05,
            opacity: inView ? 1 : 0, animation: inView ? "clipRevealUp 1s cubic-bezier(0.22, 1.2, 0.36, 1) 0.1s forwards" : "none",
          }}>
            ¿ES NEXA PARA TI?
          </h2>
        </div>

        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          {audiences.map((a, i) => (
            <div key={i} className="glass-card" style={{
              padding: 40, borderRadius: 20, position: "relative", overflow: "hidden",
              opacity: inView ? 1 : 0,
              animation: inView ? `fadeScale 0.7s cubic-bezier(0.34, 1.4, 0.64, 1) ${0.1 + i * 0.18}s forwards` : "none",
            }}>
              {/* Decorative line */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: "linear-gradient(90deg, var(--blue), var(--blue-mid))",
              }} />
              <span style={{
                display: "inline-block", padding: "5px 14px", borderRadius: 100,
                fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1,
                background: "var(--blue-light)", color: "var(--blue)", marginBottom: 20,
              }}>{a.tag}</span>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: "var(--navy)", marginBottom: 12 }}>{a.title}</h3>
              <p style={{ fontSize: 15, color: "var(--gray-600)", lineHeight: 1.7, marginBottom: 28 }}>{a.desc}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {a.features.map((f, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                      background: "var(--blue-light)", display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon name="check" size={14} color="var(--blue)" />
                    </div>
                    <span style={{ fontSize: 14, color: "var(--gray-800)", fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── PLANS ──────────────────────────────────────────────────────────
const Plans = () => {
  const [ref, inView] = useInView();
  const plans = [
    {
      name: "Nexa Base",
      tagline: "Estructura y criterio profesional",
      price: "50",
      frequency: null,
      desc: "Entrena con estructura y criterio profesional.",
      features: [
        "Programa estructurado seleccionado por fisioterapeuta",
        "Adaptación general de cargas según tu nivel",
        "Evaluación inicial de fuerza",
        "Medidas corporales básicas",
        "Revisión mensual de progreso",
        "Orientación profesional en sala",
      ],
      ideal: "Personas que quieren entrenar con seguridad, buena base técnica.",
      accent: false,
      badge: null,
      color: "#91afef",
    },
    {
      name: "Nexa Control",
      tagline: "Seguimiento técnico y progreso",
      price: "75",
      frequency: "3 días por semana",
      desc: "Seguimiento técnico y progreso estructurado.",
      includesBase: true,
      features: [
        "Evaluación funcional (FMS)",
        "Valoración de fuerza específica",
        "Programa ajustado a tus objetivos",
        "Corrección técnica activa",
        "Seguimiento mensual estructurado",
        "Proceso de recuperación integrado",
      ],
      ideal: "Personas activas y deportistas que buscan mejorar rendimiento con supervisión profesional constante.",
      accent: true,
      badge: "Más elegido",
      color: "#3560e7",
    },
    {
      name: "Nexa Proceso",
      tagline: "Optimización integral",
      price: "95",
      frequency: "5 días por semana",
      desc: "Optimización integral para alto rendimiento.",
      includesBase: true,
      includesControl: true,
      features: [
        "Programa totalmente personalizado",
        "Seguimiento continuo y ajustes estratégicos",
        "Plan nutricional estructurado",
        "Proceso de recuperación completo",
        "Enfoque orientado a objetivos exigentes",
      ],
      ideal: "Deportistas y personas con metas claras que buscan máximo progreso con control profesional.",
      accent: false,
      badge: null,
      color: "#0b1c60",
    },
  ];

  return (
    <section id="planes" ref={ref} style={{ padding: "100px 32px", background: "var(--white)" }} className="px-resp">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 64px" }}>
          <div className={`section-divider ${inView ? "visible" : ""}`} style={{ margin: "0 auto 20px" }} />
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "var(--blue)", marginBottom: 12 }}>
            Planes
          </p>
          <h2 className="font-display section-title" style={{
            fontSize: 44, color: "var(--navy)", lineHeight: 1.05, marginBottom: 16,
            opacity: inView ? 1 : 0, animation: inView ? "clipRevealUp 1s cubic-bezier(0.22, 1.2, 0.36, 1) 0.1s forwards" : "none",
          }}>
            EL PLAN QUE SE ADAPTA A TI
          </h2>
          <p style={{ fontSize: 16, color: "var(--gray-600)", lineHeight: 1.7 }}>
            Distintos niveles de acompañamiento profesional. Tú eliges según tus objetivos y necesidades.
          </p>
        </div>

        <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, alignItems: "start" }}>
          {plans.map((plan, i) => (
            <div key={i} className="plan-card" style={{
              padding: 0, borderRadius: 20, position: "relative", overflow: "hidden",
              background: plan.accent ? "var(--navy)" : "var(--white)",
              border: plan.accent ? "none" : "1px solid var(--gray-100)",
              opacity: inView ? 1 : 0,
              animation: inView ? `fadeScale 0.7s cubic-bezier(0.34, 1.4, 0.64, 1) ${0.1 + i * 0.14}s forwards` : "none",
              display: "flex", flexDirection: "column",
            }}>
              {/* Top accent bar */}
              <div style={{
                height: 4,
                background: plan.accent
                  ? "linear-gradient(90deg, #3560e7, #91afef)"
                  : i === 0
                    ? "linear-gradient(90deg, #91afef, #d9e3fa)"
                    : "linear-gradient(90deg, #0b1c60, #3560e7)",
              }} />

              <div style={{ padding: "36px 32px 32px" }}>
                {/* Badge */}
                {plan.badge && (
                  <div style={{
                    position: "absolute", top: 20, right: 20,
                    padding: "5px 12px", borderRadius: 100, fontSize: 11, fontWeight: 700,
                    background: "rgba(53,96,231,0.3)", color: "#91afef", textTransform: "uppercase", letterSpacing: 1,
                  }}>{plan.badge}</div>
                )}

                {/* Name */}
                <h3 className="font-display" style={{
                  fontSize: 30, color: plan.accent ? "white" : "var(--navy)", marginBottom: 8, letterSpacing: 1,
                }}>{plan.name}</h3>

                {/* Description */}
                <p style={{
                  fontSize: 14, lineHeight: 1.6, marginBottom: 20,
                  color: plan.accent ? "rgba(255,255,255,0.55)" : "var(--gray-600)",
                }}>{plan.desc}</p>

                {/* Price */}
                <div style={{ marginBottom: 4, display: "flex", alignItems: "baseline", gap: 4 }}>
                  <span style={{
                    fontSize: 14, fontWeight: 600,
                    color: plan.accent ? "rgba(255,255,255,0.5)" : "var(--gray-400)",
                  }}>$</span>
                  <span className="font-display" style={{
                    fontSize: 52, lineHeight: 1,
                    color: plan.accent ? "white" : "var(--navy)",
                  }}>{plan.price}</span>
                  <span style={{
                    fontSize: 14, fontWeight: 500,
                    color: plan.accent ? "rgba(255,255,255,0.5)" : "var(--gray-400)",
                    marginLeft: 4,
                  }}>/mes</span>
                </div>
                <p style={{
                  fontSize: 11.5, fontWeight: 600,
                  color: plan.accent ? "rgba(145,175,239,0.6)" : "var(--blue-mid)",
                  marginBottom: 8, letterSpacing: 0.3,
                }}>Tasa BCV</p>

                {/* Frequency */}
                {plan.frequency && (
                  <p style={{
                    fontSize: 13, fontWeight: 600, marginBottom: 4,
                    color: plan.accent ? "var(--blue-mid)" : "var(--blue)",
                  }}>{plan.frequency}</p>
                )}

                {/* Includes previous plan note */}
                {(plan.includesBase || plan.includesControl) && (
                  <p style={{
                    fontSize: 12, fontStyle: "italic", marginTop: 12,
                    color: plan.accent ? "rgba(255,255,255,0.4)" : "var(--gray-400)",
                    paddingBottom: 4,
                  }}>
                    Incluye todo lo de {plan.includesControl ? "Nexa Control" : "Nexa Base"}, más:
                  </p>
                )}

                {/* Features */}
                <div style={{
                  display: "flex", flexDirection: "column", gap: 14, marginTop: 20, marginBottom: 28,
                  paddingTop: 20, borderTop: `1px solid ${plan.accent ? "rgba(255,255,255,0.08)" : "var(--gray-100)"}`,
                }}>
                  {plan.features.map((f, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <div style={{
                        width: 20, height: 20, borderRadius: 5, flexShrink: 0, marginTop: 1,
                        background: plan.accent ? "rgba(53,96,231,0.25)" : "var(--blue-light)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <Icon name="check" size={12} color={plan.accent ? "#91afef" : "var(--blue)"} />
                      </div>
                      <span style={{
                        fontSize: 13.5, fontWeight: 500, lineHeight: 1.45,
                        color: plan.accent ? "rgba(255,255,255,0.82)" : "var(--gray-800)",
                      }}>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal for */}
                <div style={{
                  padding: "16px 18px", borderRadius: 12, marginBottom: 28,
                  background: plan.accent ? "rgba(255,255,255,0.06)" : "var(--gray-50)",
                  border: `1px solid ${plan.accent ? "rgba(255,255,255,0.06)" : "var(--gray-100)"}`,
                }}>
                  <p style={{
                    fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2,
                    color: plan.accent ? "var(--blue-mid)" : "var(--blue)", marginBottom: 6,
                  }}>Ideal para</p>
                  <p style={{
                    fontSize: 13, lineHeight: 1.55,
                    color: plan.accent ? "rgba(255,255,255,0.6)" : "var(--gray-600)",
                  }}>{plan.ideal}</p>
                </div>

                {/* CTA */}
                <a href={FORM_URL} target="_blank" rel="noopener noreferrer" style={{
                  display: "block", width: "100%", padding: "14px 0", borderRadius: 10,
                  fontSize: 14, fontWeight: 600, cursor: "pointer", transition: "all 0.3s",
                  background: plan.accent ? "linear-gradient(135deg, #3560e7, #91afef)" : "transparent",
                  color: plan.accent ? "white" : "var(--navy)",
                  border: plan.accent ? "none" : "1.5px solid var(--blue-mid)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif", textDecoration: "none", textAlign: "center",
                }}>
                  Reservar con Nexa Origen
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── LAUNCH / PROCESS ───────────────────────────────────────────────
const Launch = () => {
  const [ref, inView] = useInView();
  const steps = [
    { num: "01", title: "Evaluación inicial", desc: "Conocemos tu cuerpo, tu historial y tus objetivos. Todo empieza con criterio." },
    { num: "02", title: "Plan personalizado", desc: "Diseñamos tu programa de entrenamiento adaptado a tu realidad y metas." },
    { num: "03", title: "Entrenamiento guiado", desc: "Cada sesión tiene estructura, supervisión y propósito. Sin improvisación." },
    { num: "04", title: "Seguimiento continuo", desc: "Ajustamos, prevenimos y acompañamos. Tu progreso es nuestro proceso." },
  ];

  return (
    <section ref={ref} style={{
      padding: "100px 32px",
      background: "linear-gradient(180deg, var(--gray-50) 0%, var(--white) 100%)",
    }} className="px-resp">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ maxWidth: 540, marginBottom: 64 }}>
          <div className={`section-divider ${inView ? "visible" : ""}`} style={{ marginBottom: 20 }} />
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "var(--blue)", marginBottom: 12 }}>
            Cómo funciona
          </p>
          <h2 className="font-display section-title" style={{
            fontSize: 44, color: "var(--navy)", lineHeight: 1.05,
            opacity: inView ? 1 : 0, animation: inView ? "clipRevealUp 1s cubic-bezier(0.22, 1.2, 0.36, 1) 0.1s forwards" : "none",
          }}>
            TU PROCESO EN NEXA
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              display: "flex", gap: 32, alignItems: "flex-start",
              padding: "32px 0",
              borderBottom: i < steps.length - 1 ? "1px solid var(--gray-100)" : "none",
              opacity: inView ? 1 : 0,
              animation: inView ? `slideInLeft 0.6s cubic-bezier(0.34, 1.4, 0.64, 1) ${0.1 + i * 0.12}s forwards` : "none",
            }}>
              <span className="font-display" style={{
                fontSize: 48, color: "var(--blue-light)", lineHeight: 1, minWidth: 72,
              }}>{s.num}</span>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--navy)", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 15, color: "var(--gray-600)", lineHeight: 1.65, maxWidth: 480 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── FAQ ────────────────────────────────────────────────────────────
const FAQ = () => {
  const [ref, inView] = useInView();
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: "¿Nexa es un gimnasio?", a: "No. Nexa es un espacio de entrenamiento profesional con acompañamiento de fisioterapeutas. Aquí no se entrena al azar — todo tiene estructura, criterio y seguimiento." },
    { q: "¿Necesito tener experiencia entrenando?", a: "No necesitas experiencia previa. Nos adaptamos a tu nivel, desde personas que inician hasta deportistas de alto rendimiento." },
    { q: "¿Qué pasa si tengo una lesión o molestia?", a: "El entrenamiento se ajusta a tu realidad. Si necesitas intervención terapéutica, contamos con fisioterapeutas que trabajan de forma integrada con tu proceso de entrenamiento." },
    { q: "¿En qué se diferencia de un centro de rehabilitación?", a: "En Nexa, el entrenamiento es el protagonista. La fisioterapia está disponible cuando se necesita, pero el objetivo principal es que entrenes mejor, rindas más y cuides tu cuerpo." },
    { q: "¿Puedo entrenar si vengo de un proceso de fisioterapia?", a: "Sí, de hecho es uno de los escenarios más comunes. Te ayudamos a retomar el entrenamiento con seguridad y continuidad profesional." },
    { q: "¿Cómo elijo el plan adecuado?", a: "En tu evaluación inicial analizamos tu perfil, objetivos y necesidades. Con base en eso, te recomendamos el plan que mejor se adapta a ti." },
    { q: "¿Qué beneficios obtengo si me inscribo antes de la inauguración?", a: "Al inscribirte antes del 7 de marzo formas parte de Nexa Origen: recibes invitación a la inauguración, medias edición limitada, una sesión de Nexa Recovery, onboarding prioritario y acceso preferente a los cupos de marzo." },
    { q: "¿Dónde están ubicados?", a: <>Estamos en Barquisimeto. Puedes ver nuestra <a href="https://maps.app.goo.gl/Sv1kWtonHkFWcBnr7?g_st=iw" target="_blank" rel="noopener noreferrer" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "underline" }}>ubicación exacta en Google Maps</a>.</> },
  ];

  return (
    <section id="faq" ref={ref} style={{ padding: "100px 32px", background: "var(--white)" }} className="px-resp">
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className={`section-divider ${inView ? "visible" : ""}`} style={{ margin: "0 auto 20px" }} />
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "var(--blue)", marginBottom: 12 }}>
            Preguntas frecuentes
          </p>
          <h2 className="font-display section-title" style={{
            fontSize: 44, color: "var(--navy)", lineHeight: 1.05,
            opacity: inView ? 1 : 0, animation: inView ? "clipRevealUp 1s cubic-bezier(0.22, 1.2, 0.36, 1) 0.1s forwards" : "none",
          }}>
            RESOLVEMOS TUS DUDAS
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{
              borderBottom: "1px solid var(--gray-100)",
              opacity: inView ? 1 : 0,
              animation: inView ? `fadeUp 0.5s cubic-bezier(0.34, 1.4, 0.64, 1) ${0.05 + i * 0.07}s forwards` : "none",
            }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", padding: "24px 0", display: "flex", justifyContent: "space-between",
                  alignItems: "center", background: "none", border: "none", cursor: "pointer",
                  textAlign: "left", fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                <span style={{ fontSize: 16, fontWeight: 600, color: "var(--navy)", paddingRight: 16 }}>{faq.q}</span>
                <div style={{
                  transition: "transform 0.3s ease", flexShrink: 0,
                  transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                }}>
                  <Icon name="chevron" size={20} color="var(--blue)" />
                </div>
              </button>
              <div className={`faq-answer ${open === i ? "open" : ""}`}>
                <p style={{ fontSize: 15, color: "var(--gray-600)", lineHeight: 1.7, paddingRight: 40 }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── FINAL CTA ──────────────────────────────────────────────────────
const FinalCTA = () => {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ padding: "0 32px 100px" }} className="px-resp">
      <div style={{
        maxWidth: 1200, margin: "0 auto", borderRadius: 24, overflow: "hidden",
        background: "linear-gradient(135deg, #0b1c60 0%, #1a2d7a 50%, #3560e7 100%)",
        padding: "80px 60px", textAlign: "center", position: "relative",
        opacity: inView ? 1 : 0, animation: inView ? "fadeScale 0.8s cubic-bezier(0.34, 1.4, 0.64, 1) forwards" : "none",
      }}>
        {/* Decorative circles */}
        <div style={{
          position: "absolute", top: -60, right: -60, width: 240, height: 240,
          borderRadius: "50%", border: "1px solid rgba(145,175,239,0.12)",
        }} />
        <div style={{
          position: "absolute", bottom: -40, left: -40, width: 180, height: 180,
          borderRadius: "50%", border: "1px solid rgba(145,175,239,0.08)",
        }} />

        <h2 className="font-display" style={{
          fontSize: 52, color: "white", lineHeight: 1.05, marginBottom: 20, position: "relative",
          opacity: inView ? 1 : 0, animation: inView ? "clipRevealUp 1s cubic-bezier(0.22, 1.2, 0.36, 1) 0.15s forwards" : "none",
        }}>
          SÉ PARTE DE{" "}
          <span style={{ color: "var(--blue-mid)" }}>NEXA ORIGEN</span>
        </h2>
        <p style={{
          fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.7,
          maxWidth: 520, margin: "0 auto 12px", position: "relative",
        }}>
          Inscríbete antes de la inauguración y accede a beneficios que no se repetirán. Sé parte del grupo fundador de Nexa.
        </p>
        <p style={{
          fontSize: 13, fontWeight: 600, color: "var(--blue-mid)", marginBottom: 32,
          position: "relative",
        }}>
          Inscripciones abiertas hasta el {DEADLINE}
        </p>
        <div style={{ position: "relative" }}>
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" style={{
            display: "inline-block",
            background: "white", color: "var(--navy)", border: "none",
            padding: "16px 40px", borderRadius: 10, fontSize: 15, fontWeight: 700,
            cursor: "pointer", transition: "all 0.3s",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)", textDecoration: "none",
          }}>
            Quiero ser parte de Nexa Origen
          </a>
        </div>
      </div>
    </section>
  );
};

// ─── FOOTER ─────────────────────────────────────────────────────────
const Footer = () => (
  <footer style={{
    padding: "48px 32px", borderTop: "1px solid var(--gray-100)", background: "var(--white)",
  }} className="px-resp">
    <div style={{
      maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between",
      alignItems: "center", flexWrap: "wrap", gap: 16,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img src={NEXA_LOGO_BLUE} alt="Nexa" style={{ height: 32, width: "auto", objectFit: "contain" }} />
      </div>
      <p style={{ fontSize: 13, color: "var(--gray-400)" }}>
        © 2026 Nexa — Entrenamiento, prevención y recuperación.
      </p>
    </div>
  </footer>
);

// ─── MAIN APP ───────────────────────────────────────────────────────
export default function NexaLanding() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <NexaOrigen />
      <Problem />
      <Solution />
      <ForWho />
      <Plans />
      <Launch />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
