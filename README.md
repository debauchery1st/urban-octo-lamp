# urban-octo-lamp

_commonJS_ import

const oneState = require('./oneState');

## Modules

<dl>
<dt><a href="#module_oneState">oneState</a></dt>
<dd></dd>
<dt><a href="#module_Agent">Agent</a> ⇒ <code>Object</code></dt>
<dd></dd>
</dl>

<a name="module_oneState"></a>

## oneState

- [oneState](#module_oneState)
  - [.get(key)](#module_oneState.get) ⇒ <code>\*</code>
  - [.set(obj, stamp)](#module_oneState.set) ⇒ <code>boolean</code>
  - [.uptime()](#module_oneState.uptime) ⇒
  - [.title(newTitle)](#module_oneState.title) ⇒ <code>string</code>

<a name="module_oneState.get"></a>

### oneState.get(key) ⇒ <code>\*</code>

get

**Kind**: static method of [<code>oneState</code>](#module_oneState)  
**Returns**: <code>\*</code> - state or \*state.key value

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| key   | <code>string</code> | \*optional  |

<a name="module_oneState.set"></a>

### oneState.set(obj, stamp) ⇒ <code>boolean</code>

set

**Kind**: static method of [<code>oneState</code>](#module_oneState)

| Param | Type                 | Default            | Description          |
| ----- | -------------------- | ------------------ | -------------------- |
| obj   | <code>Object</code>  |                    | \*required           |
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

| Param    | Type                |
| -------- | ------------------- |
| newTitle | <code>string</code> |

<a name="module_Agent"></a>

## Agent ⇒ <code>Object</code>

**Returns**: <code>Object</code> - Object with local & shared states

| Param | Type                |
| ----- | ------------------- |
| named | <code>string</code> |

- [Agent](#module_Agent) ⇒ <code>Object</code>
  - [~localState](#module_Agent..localState)
  - [~appState](#module_Agent..appState)
  - [~localInit()](#module_Agent..localInit) ⇒
  - [~start()](#module_Agent..start)
  - [~status()](#module_Agent..status) ⇒ <code>Object</code>
  - [~set(obj)](#module_Agent..set)
  - [~get(name)](#module_Agent..get)
  - [~setTitle(newTitle)](#module_Agent..setTitle)
  - [~receives(items)](#module_Agent..receives)
  - [~gives(item, receiver)](#module_Agent..gives)
  - [~name()](#module_Agent..name) ⇒

<a name="module_Agent..localState"></a>

### Agent~localState

local state

**Kind**: inner constant of [<code>Agent</code>](#module_Agent)  
<a name="module_Agent..appState"></a>

### Agent~appState

access to a globally accessible state

**Kind**: inner constant of [<code>Agent</code>](#module_Agent)  
<a name="module_Agent..localInit"></a>

### Agent~localInit() ⇒

start the local state

**Kind**: inner method of [<code>Agent</code>](#module_Agent)  
**Returns**: localSate  
<a name="module_Agent..start"></a>

### Agent~start()

start the agent

**Kind**: inner method of [<code>Agent</code>](#module_Agent)  
<a name="module_Agent..status"></a>

### Agent~status() ⇒ <code>Object</code>

**Kind**: inner method of [<code>Agent</code>](#module_Agent)  
**Returns**: <code>Object</code> - agent status  
<a name="module_Agent..set"></a>

### Agent~set(obj)

add or update a global

**Kind**: inner method of [<code>Agent</code>](#module_Agent)

| Param | Type                |
| ----- | ------------------- |
| obj   | <code>Object</code> |

<a name="module_Agent..get"></a>

### Agent~get(name)

get the value of a global

**Kind**: inner method of [<code>Agent</code>](#module_Agent)

| Param | Type                |
| ----- | ------------------- |
| name  | <code>string</code> |

<a name="module_Agent..setTitle"></a>

### Agent~setTitle(newTitle)

set the title of the global state

**Kind**: inner method of [<code>Agent</code>](#module_Agent)

| Param    | Type                |
| -------- | ------------------- |
| newTitle | <code>string</code> |

<a name="module_Agent..receives"></a>

### Agent~receives(items)

receive into local state.

**Kind**: inner method of [<code>Agent</code>](#module_Agent)

| Param | Type               |
| ----- | ------------------ |
| items | <code>Array</code> |

<a name="module_Agent..gives"></a>

### Agent~gives(item, receiver)

transfer from local state to another Agent

**Kind**: inner method of [<code>Agent</code>](#module_Agent)

| Param    | Type                |
| -------- | ------------------- |
| item     | <code>Object</code> |
| receiver | <code>Object</code> |

<a name="module_Agent..name"></a>

### Agent~name() ⇒

**Kind**: inner method of [<code>Agent</code>](#module_Agent)  
**Returns**: Agent's name

&copy; 2020 TM & Lambda Labs
