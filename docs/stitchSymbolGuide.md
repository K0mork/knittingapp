# 編み物記号一覧

| 記号名 | 説明 | マス数（横×縦） |
|-------|------|--------------|
| knit | 表編み目 | 1×1（square）<br>2×1（horizontal）<br>1×2（vertical） |
| purl | 裏編み目 | 1×1（square）<br>2×1（horizontal）<br>1×2（vertical） |
| left_up_three_one | 左上3目交差 | 1×1 |
| left_up_two_cross | 左上2目交差 | 1×1 |
| left_up_two_one | 左上2目1目交差 | 1×1 |
| middle_up_three_one | 中央上3目交差 | 1×1 |
| purl_left_up_two_one | 裏編み左上2目1目交差 | 1×1 |
| right_up_three_one | 右上3目交差 | 1×1 |
| right_up_two_cross | 右上2目交差 | 1×1 |
| right_up_two_one | 右上2目1目交差 | 1×1 |
| slip_stitch | すべり目 | 1×1 |
| twist_stitch | ねじり目 | 1×1 |
| purl_twisst_stitch | 裏ねじり目 | 1×1 |
| yo | 糸をかける（YO） | 1×1 |
| erase | 消去 | 1×1 |

## 記号のSVG表現

### knit (表編み目)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <!-- 大枠 -->
  <path fill-rule="evenodd" fill="none" d="M 0,850.5 H 850.5 V 0 H 0 Z" />
  <!-- 針の線 -->
  <path stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 425.62891,84.37109 V 766.4375" />
</svg>
```

### purl (裏編み目)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" d="M 0 850.5 L 850.5 850.5 L 850.5 0 L 0 0 Z" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 81.375 424.878906 L 770.230469 424.871094"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
</svg>
```

### left_up_three_one (左上3目交差)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" d="M 0 850.5 L 850.5 850.5 L 850.5 0 L 0 0 Z" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 398.621094 441.378906 L 735.601562 98.964844"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 398.621094 441.378906 L 398.628906 32.390625"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 115.871094 98.964844 L 398.460938 441.378906"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 712.359375 817.878906 L 115.871094 99.128906"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
</svg>
```

### left_up_two_cross (左上2目交差)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" d="M 0 850.5 L 850.5 850.5 L 850.5 0 L 0 0 Z" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 683.121094 794.628906 L 58.125 170.988281"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 426.058594 536.46875 L 170.621094 794.628906"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 793.371094 679.128906 L 168.371094 55.484375"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 793.558594 170.46875 L 538.128906 428.628906"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 682.558594 55.722656 L 427.128906 313.878906"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 313.460938 425.140625 L 59.625 676.128906"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
</svg>
```

### left_up_two_one (左上2目1目交差)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" d="M 0 850.5 L 850.5 850.5 L 850.5 0 L 0 0 Z" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 425.628906 424.878906 L 762.601562 82.464844"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 762.828125 767.628906 L 88.875 82.804688"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
</svg>
```

### middle_up_three_one (中央上3目交差)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" d="M 0 850.5 L 850.5 850.5 L 850.5 0 L 0 0 Z" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 398.621094 424.878906 L 735.601562 82.464844"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 398.621094 767.628906 L 398.628906 82.804688"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 115.871094 82.464844 L 398.460938 424.878906"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
</svg>
```

### purl_left_up_two_one (裏編み左上2目1目交差)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" d="M 0 850.5 L 850.5 850.5 L 850.5 0 L 0 0 Z" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 425.628906 424.878906 L 762.601562 82.464844"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 762.828125 767.628906 L 88.875 82.804688"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 277.878906 138.378906 L 575.429688 138.371094"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
</svg>
```

### right_up_three_one (右上3目交差)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" d="M 0 850.5 L 850.5 850.5 L 850.5 0 L 0 0 Z" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 398.621094 479.628906 L 735.601562 137.21875"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 398.621094 479.628906 L 398.628906 84.226562"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 115.871094 137.21875 L 398.460938 479.628906"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 115.871094 765.378906 L 735.441406 137.160156"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
</svg>
```

### right_up_two_cross (右上2目交差)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" d="M 0 850.5 L 850.5 850.5 L 850.5 0 L 0 0 Z" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 170.628906 793.128906 L 792.910156 173.558594"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 55.125 680.628906 L 680.121094 56.984375"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 311.921875 423.378906 L 55.125 173.378906"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 680.171875 793.128906 L 423.371094 543.128906"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 795.671875 680.628906 L 538.878906 430.628906"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 422.171875 310.878906 L 165.371094 60.875"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
</svg>
```

### right_up_two_one (右上2目1目交差)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" d="M 0 850.5 L 850.5 850.5 L 850.5 0 L 0 0 Z" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 144.378906 767.628906 L 762.578125 82.804688"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 438.101562 438.378906 L 88.875 82.398438"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
</svg>
```

### slip_stitch (すべり目)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" d="M 0 850.5 L 850.5 850.5 L 850.5 0 L 0 0 Z" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 90.375 754.878906 L 425.949219 119.011719"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 761.199219 754.878906 L 425.621094 119.011719"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="currentColor" fill-opacity="1" stroke="none" stroke-width="1.5002" stroke-linecap="butt" stroke-linejoin="miter"
    d="M 381.75 95.25 L 468.75 95.25 L 468.75 212.25 L 381.75 212.25 Z"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
</svg>
```

### twist_stitch (ねじり目)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" d="M 0 850.5 L 850.5 850.5 L 850.5 0 L 0 0 Z" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 595.550781 545.628906 L 599.628906 428.828125 C 598.039062 418.648438 593.960938 386.730469 590.109375 367.71875 C 586.25 348.710938 583.539062 332.410156 576.511719 314.761719 C 569.488281 297.101562 556.789062 276<!-- filepath: /Users/komorikouki/git/knittingEditor/stitchSymbolGuide.md -->
# 編み物記号一覧

| 記号名 | 説明 | マス数（横×縦） |
|-------|------|--------------|
| knit | 表編み目 | 1×1（square）<br>2×1（horizontal）<br>1×2（vertical） |
| purl | 裏編み目 | 1×1（square）<br>2×1（horizontal）<br>1×2（vertical） |
| left_up_three_one | 左上3目交差 | 1×1 |
| left_up_two_cross | 左上2目交差 | 1×1 |
| left_up_two_one | 左上2目1目交差 | 1×1 |
| middle_up_three_one | 中央上3目交差 | 1×1 |
| purl_left_up_two_one | 裏編み左上2目1目交差 | 1×1 |
| right_up_three_one | 右上3目交差 | 1×1 |
| right_up_two_cross | 右上2目交差 | 1×1 |
| right_up_two_one | 右上2目1目交差 | 1×1 |
| slip_stitch | すべり目 | 1×1 |
| twist_stitch | ねじり目 | 1×1 |
| purl_twist_stitch | 裏ねじり目 | 1×1 |
| yo | 糸をかける（YO） | 1×1 |
| erase | 消去 | 1×1 |

## 記号のSVG表現

### knit (表編み目)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <!-- 大枠 -->
  <path fill-rule="evenodd" fill="none" d="M 0,850.5 H 850.5 V 0 H 0 Z" />
  <!-- 針の線 -->
  <path stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 425.62891,84.37109 V 766.4375" />
</svg>
```

### purl (裏編み目)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" d="M 0 850.5 L 850.5 850.5 L 850.5 0 L 0 0 Z" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 81.375 424.878906 L 770.230469 424.871094"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
</svg>
```

### left_up_three_one (左上3目交差)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" d="M 0 850.5 L 850.5 850.5 L 850.5 0 L 0 0 Z" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 398.621094 441.378906 L 735.601562 98.964844"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 398.621094 441.378906 L 398.628906 32.390625"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 115.871094 98.964844 L 398.460938 441.378906"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 712.359375 817.878906 L 115.871094 99.128906"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
</svg>
```

### left_up_two_cross (左上2目交差)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" d="M 0 850.5 L 850.5 850.5 L 850.5 0 L 0 0 Z" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 683.121094 794.628906 L 58.125 170.988281"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 426.058594 536.46875 L 170.621094 794.628906"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 793.371094 679.128906 L 168.371094 55.484375"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 793.558594 170.46875 L 538.128906 428.628906"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 682.558594 55.722656 L 427.128906 313.878906"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 313.460938 425.140625 L 59.625 676.128906"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
</svg>
```

### left_up_two_one (左上2目1目交差)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" d="M 0 850.5 L 850.5 850.5 L 850.5 0 L 0 0 Z" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 425.628906 424.878906 L 762.601562 82.464844"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 762.828125 767.628906 L 88.875 82.804688"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
</svg>
```

### middle_up_three_one (中央上3目交差)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" d="M 0 850.5 L 850.5 850.5 L 850.5 0 L 0 0 Z" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 398.621094 424.878906 L 735.601562 82.464844"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 398.621094 767.628906 L 398.628906 82.804688"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 115.871094 82.464844 L 398.460938 424.878906"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
</svg>
```

### purl_left_up_two_one (裏編み左上2目1目交差)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" d="M 0 850.5 L 850.5 850.5 L 850.5 0 L 0 0 Z" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 425.628906 424.878906 L 762.601562 82.464844"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 762.828125 767.628906 L 88.875 82.804688"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 277.878906 138.378906 L 575.429688 138.371094"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
</svg>
```

### right_up_three_one (右上3目交差)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" d="M 0 850.5 L 850.5 850.5 L 850.5 0 L 0 0 Z" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 398.621094 479.628906 L 735.601562 137.21875"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 398.621094 479.628906 L 398.628906 84.226562"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 115.871094 137.21875 L 398.460938 479.628906"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 115.871094 765.378906 L 735.441406 137.160156"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
</svg>
```

### right_up_two_cross (右上2目交差)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" d="M 0 850.5 L 850.5 850.5 L 850.5 0 L 0 0 Z" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 170.628906 793.128906 L 792.910156 173.558594"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 55.125 680.628906 L 680.121094 56.984375"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 311.921875 423.378906 L 55.125 173.378906"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 680.171875 793.128906 L 423.371094 543.128906"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 795.671875 680.628906 L 538.878906 430.628906"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 422.171875 310.878906 L 165.371094 60.875"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
</svg>
```

### right_up_two_one (右上2目1目交差)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" d="M 0 850.5 L 850.5 850.5 L 850.5 0 L 0 0 Z" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 144.378906 767.628906 L 762.578125 82.804688"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 438.101562 438.378906 L 88.875 82.398438"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
</svg>
```

### slip_stitch (すべり目)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" d="M 0 850.5 L 850.5 850.5 L 850.5 0 L 0 0 Z" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 90.375 754.878906 L 425.949219 119.011719"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 761.199219 754.878906 L 425.621094 119.011719"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
  <path fill="currentColor" fill-opacity="1" stroke="none" stroke-width="1.5002" stroke-linecap="butt" stroke-linejoin="miter"
    d="M 381.75 95.25 L 468.75 95.25 L 468.75 212.25 L 381.75 212.25 Z"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
</svg>
```

### twist_stitch (ねじり目/Twist Stitch)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" d="M 0 850.5 L 850.5 850.5 L 850.5 0 L 0 0 Z" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 595.550781 545.628906 L 599.628906 428.828125 C 598.039062 418.648438 593.960938 386.730469 590.109375 367.71875 C 586.25 348.710938 583.539062 332.410156 576.511719 314.761719 C 569.488281 297.101562 556.789062 276.5 544.628906 276.5 C 532.46875 276.5 522.46875 304.5 510.308594 304.5 C 498.148438 304.5 488.148438 276.5 475.988281 276.5 C 463.828125 276.5 453.828125 304.5 441.667969 304.5 C 429.507812 304.5 419.507812 276.5 407.347656 276.5 C 395.1875 276.5 385.1875 304.5 373.027344 304.5 C 360.867188 304.5 350.867188 276.5 338.707031 276.5 C 326.546875 276.5 316.546875 304.5 304.386719 304.5 C 292.226562 304.5 282.226562 276.5 270.066406 276.5 C 257.90625 276.5 247.90625 304.5 235.746094 304.5 C 223.585938 304.5 213.585938 276.5 201.425781 276.5" />
</svg>
```

### purl_twist_stitch (裏ねじり目/Purl Twist Stitch)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" d="M 0 850.5 L 850.5 850.5 L 850.5 0 L 0 0 Z" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 595.550781 545.628906 L 599.628906 428.828125 C 598.039062 418.648438 593.960938 386.730469 590.109375 367.71875 C 586.25 348.710938 583.539062 332.410156 576.511719 314.761719 C 569.488281 297.101562 556.789062 276.5 544.628906 276.5 C 532.46875 276.5 522.46875 304.5 510.308594 304.5 C 498.148438 304.5 488.148438 276.5 475.988281 276.5 C 463.828125 276.5 453.828125 304.5 441.667969 304.5 C 429.507812 304.5 419.507812 276.5 407.347656 276.5 C 395.1875 276.5 385.1875 304.5 373.027344 304.5 C 360.867188 304.5 350.867188 276.5 338.707031 276.5 C 326.546875 276.5 316.546875 304.5 304.386719 304.5 C 292.226562 304.5 282.226562 276.5 270.066406 276.5 C 257.90625 276.5 247.90625 304.5 235.746094 304.5 C 223.585938 304.5 213.585938 276.5 201.425781 276.5" />
  <path fill="none" stroke="currentColor" stroke-width="100.01" stroke-linecap="butt" stroke-linejoin="miter"
    stroke-opacity="1" stroke-miterlimit="10" d="M 277.878906 138.378906 L 575.429688 138.371094"
    transform="matrix(1, 0, 0, -1, 0, 850.5)" />
</svg>
```

### yo (糸をかける/Yarn Over)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" d="M 0 850.5 L 850.5 850.5 L 850.5 0 L 0 0 Z" />
  <circle cx="425.25" cy="425.25" r="300" stroke="currentColor" stroke-width="50" fill="none"/>
</svg>
```

### erase (消去/ERASE)
```svg
<svg viewBox="0 0 850.5 850.5" style="width:100%;height:100%;" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" fill="none" d="M 0 850.5 L 850.5 850.5 L 850.5 0 L 0 0 Z" />
  <path stroke="currentColor" stroke-width="100" d="M 170 170 L 680 680 M 680 170 L 170 680"/>
</svg>
```
