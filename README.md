# winston-splunk 

A [splunk][2] transport for [winston][0]. Inspired by [winston-greylog2][1].

## Installation
Tested on node-0.6.x, requires npm.

``` sh
  $ # Currently not in npm use git for now.
  $ npm install winston
  $ npm install winston-splunk
```

## Usage
``` js
  var winston = require('winston');
  winston.add(require('winston-splunk').splunk, options);

```
## Splunk props.conf
Example props.conf
```
[udp:54321]
NO_BINARY_CHECK=1
SHOULD_LINEMERGE=false
TIME_PREFIX={"_timestamp":
```

Options are the following:

* __level:__ Level of messages this transport should log. (default: info)
* __silent:__ Boolean flag indicating whether to suppress output. (default: false)

* __splunkHost:__ IP address or hostname of the Splunk server. (default: localhost)
* __splunkPort:__ Port to send messages to on the Splunk server. (default: 54321)
* __splunkHostname:__ The hostname associated with Splunk messages. (default: require('os').hostname())
* __splunkFacility:__ The Splunk facility to send log messages.. (default: nodejs)

[0]: https://github.com/flatiron/winston
[1]: https://github.com/flite/winston-graylog2 
[2]: http://www.splunk.org
