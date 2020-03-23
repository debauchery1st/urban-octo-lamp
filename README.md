# urban-octo-lamp
_commonJS_ import

const oneState = require('./oneState');

<a name="module_oneState"></a>

## oneState

* [oneState](#module_oneState)
    * [.get(key)](#module_oneState.get) ⇒ <code>\*</code>
    * [.set(obj, stamp)](#module_oneState.set) ⇒ <code>boolean</code>
    * [.uptime()](#module_oneState.uptime) ⇒
    * [.title(newTitle)](#module_oneState.title) ⇒ <code>string</code>

<a name="module_oneState.get"></a>

### oneState.get(key) ⇒ <code>\*</code>
get

**Kind**: static method of [<code>oneState</code>](#module_oneState)  
**Returns**: <code>\*</code> - state or *state.key value  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | *optional |

<a name="module_oneState.set"></a>

### oneState.set(obj, stamp) ⇒ <code>boolean</code>
set

**Kind**: static method of [<code>oneState</code>](#module_oneState)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| obj | <code>Object</code> |  | *required |
| stamp | <code>boolean</code> | <code>false</code> | timestamp this call? |

<a name="module_oneState.uptime"></a>

### oneState.uptime() ⇒
uptime

**Kind**: static method of [<code>oneState</code>](#module_oneState)  
**Returns**: time delta measured in seconds  
<a name="module_oneState.title"></a>

### oneState.title(newTitle) ⇒ <code>string</code>
get or set Title

**Kind**: static method of [<code>oneState</code>](#module_oneState)  
**Returns**: <code>string</code> - current title  

| Param | Type |
| --- | --- |
| newTitle | <code>string</code> | 



&copy; 2020 TM & Lambda Labs