(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{RpMA:function(e,o,t){"use strict";t.r(o);var n=t("KHd+"),r=t("UQSp"),a=t("Kw5r");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.a.config.optionMergeStrategies;var s={VueRemarkRoot:r.a},c=function(e){var o=e.options.components=e.options.components||{},t=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===i(s[e])&&"function"==typeof s[e].render?o[e]=s[e]:t[e]=function(){return s[e]}}))},u=a.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",d={excerpt:null,title:"Robonomics IO Launch"};var f=function(e){e.options[p]&&(e.options[p]=d),a.a.util.defineReactive(e.options,p,d),e.options.computed=u.computed({$frontmatter:function(){return e.options[p]}},e.options.computed)},l=Object(n.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("VueRemarkRoot",[t("h1",{attrs:{id:"robonomics-io-launch"}},[t("a",{attrs:{href:"#robonomics-io-launch","aria-hidden":"true"}},[e._v("#")]),e._v("Robonomics IO Launch")]),t("p",[e._v('A simple way to turn on and off an IoT device or a robot. Basically sending "ON" will result in '),t("code",{pre:!0},[e._v("true")]),e._v(" state for a device, anything else will result in "),t("code",{pre:!0},[e._v("false")]),e._v(".")]),t("p",[e._v("For the examples the development network is used. Check "),t("a",{attrs:{href:"/docs/robonomics-test-network-manual/"}},[e._v("this")]),e._v(" out to set it up for yourself.")]),t("h2",{attrs:{id:"requirements"}},[t("a",{attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v("Requirements")]),t("ul",[t("li",[t("code",{pre:!0},[e._v("robonomics")]),t("a",{attrs:{href:"https://github.com/airalab/robonomics/releases",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("executable")])]),t("li",[e._v("Accounts on parachain")])]),t("p",[e._v("You can find instructions on how to create an account "),t("a",{attrs:{href:"/docs/create-account-in-dapp"}},[e._v("here")])]),t("h2",{attrs:{id:"usage"}},[t("a",{attrs:{href:"#usage","aria-hidden":"true"}},[e._v("#")]),e._v("Usage")]),t("p",[e._v("To see the result of transaction first of all run "),t("code",{pre:!0},[e._v("read")]),e._v(" part:")]),t("pre",[t("code",{pre:!0},[e._v("% ./robonomics io read launch\n")])]),t("p",[e._v("Now let's turn a robot on:")]),t("pre",[t("code",{pre:!0},[e._v('% echo "ON" | ./robonomics io write launch -r 5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL -s 0xb046fc3c322e91e14a61ad4f08a3809ee0de7092e73aa9b3c2b642a0f476d4d6\n')])]),t("p",[e._v("Then you should see in the first terminal window:")]),t("pre",[t("code",{pre:!0},[e._v("% ./robonomics io read launch\n5H3iRnX16DH2sb2RLxMM8UhDZTvJjP84EhhKXv3sCiEDq6bH >> 5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL : true\n")])]),t("p",[e._v("Let's describe all the accounts and options above.")]),t("ul",[t("li",[t("code",{pre:!0},[e._v("-r 5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL")]),e._v(" means robot's address")]),t("li",[t("code",{pre:!0},[e._v("-s 0xb046fc3c322e91e14a61ad4f08a3809ee0de7092e73aa9b3c2b642a0f476d4d6")]),e._v(" private key of the account to launch from (must have tokens for a transaction)")]),t("li",[t("code",{pre:!0},[e._v("5H3iRnX16DH2sb2RLxMM8UhDZTvJjP84EhhKXv3sCiEDq6bH")]),e._v(" address that launches a robot")]),t("li",[t("code",{pre:!0},[e._v("true")]),e._v(" turn it on")])]),t("p",[e._v('If we pass anything else but "ON" the state becomes '),t("code",{pre:!0},[e._v("false")])]),t("h2",{attrs:{id:"remote"}},[t("a",{attrs:{href:"#remote","aria-hidden":"true"}},[e._v("#")]),e._v("Remote")]),t("p",[e._v("If your local node is configured differently from defaults or you have a remote node, it's possible to specify it with "),t("code",{pre:!0},[e._v("--remote")]),e._v(" option")]),t("pre",[t("code",{pre:!0},[e._v('% echo "ON" | ./robonomics io write launch -r 5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL -s 0xb046fc3c322e91e14a61ad4f08a3809ee0de7092e73aa9b3c2b642a0f476d4d6 --remote https://ipfs.infura.io:5001/\n')])]),t("p",[e._v("and")]),t("pre",[t("code",{pre:!0},[e._v("% ./robonomics io read launch --remote https://ipfs.infura.io:5001/\n")])])])}),[],!1,null,null,null);"function"==typeof c&&c(l),"function"==typeof f&&f(l);o.default=l.exports},UQSp:function(e,o,t){"use strict";o.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);