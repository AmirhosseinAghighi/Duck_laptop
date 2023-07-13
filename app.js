const quickControl = new Vue({
  el: "#quick-control",
  data: {
    buttons: [
      { url: "images/wifi.png", name: "WiFi", value: true },
      { url: "images/bluetooth.png", name: "Bluetooth", value: false },
      { url: "images/airplane.png", name: "Flight Mode", value: false },
      { url: "images/saver.png", name: "Battery Saver", value: false },
      { url: "images/moon.png", name: "Theme", value: false },
      { url: "images/nightlight.png", name: "Night Light", value: false },

      // Sliders
      { url: "images/brightness.png", name: "Brightness", value: 100 },
      { url: "images/audio3.png", name: "Audio", value: 100 },
    ],
    open: false,
  },
  methods: {
    toggleSetting: function (index) {
      this.buttons[index].value = !this.buttons[index].value;

      if (index === 2) {
        this.buttons[0].value = !this.buttons[index].value;
        this.buttons[1].value = !this.buttons[index].value;
      } else if (index === 1 || index === 0) {
        this.buttons[2].value = false;
      }
    },
  },
  watch: {
    buttons: {
      handler: function (val, oldVal) {
        volume = val[7].value;
        this.buttons[7].url =
          Volume === 0
            ? "images/audio0.png"
            : Volume > 75
            ? "images/audio3.png"
            : Volume > 50
            ? "images/audio2.png"
            : "images/audio1.png";
      },
      deep: true,
    },
  },
});

const taskbar = new Vue({
  el: "#taskbar",
  data: {
    apps: {
      ["window"]: {
        url: "images/window.png",
        name: "Window",
        id: 0,
        active: false,
        action: function() {
          desktop.startMenu = !desktop.startMenu
        }
      },
      ["search"]: {
        url: "images/search.png",
        name: "Search",
        id: 1,
        active: false,
        action: function() {
          desktop.startMenu = !desktop.startMenu
        }
      },
      ["widgets"]: {
        url: "images/widget.png",
        name: "Widgets",
        id: 2,
        active: false,
      },
      ["setting"]: {
        url: "images/setting.png",
        name: "Setting",
        id: 3,
        active: false,
      },
      ["file-explorer"]: {
        url: "images/explorer.png",
        name: "File Explorer",
        id: 4,
        active: false,
      },
      ["edge"]: {
        url: "images/edge.png",
        name: "Edge",
        id: 5,
        active: false,
      },
      ["store"]: {
        url: "images/store.png",
        name: "Store",
        id: 6,
        active: false,
      },
      ["store"]: {
        url: "images/store.png",
        name: "Store",
        id: 7,
        active: false,
      },
    },
    // infoIcons: [
    //     {url: 'images/wifi.png', id: 100, if: () => {return quickControl.buttons[1].value}},
    //     {url: 'images/audio3.png', id: 101, if: () => {return quickControl.buttons[1].value}}
    // ]
  },
  methods: {
    click: function (id) {
      quickControl.open = !quickControl.open;
    },
    openApp: function (id) {
      console.log(id);
      desktop.appsData[id].open = !desktop.appsData[id].open;
    },
    // calcuteAudio:
  },
  computed: {
    infoIcons: function () {
      Volume = Number(quickControl.buttons[7].value);
      return [
        { url: "images/wifi.png", id: 100, if: quickControl.buttons[0].value },
        {
          url: "images/bluetooth.png",
          id: 101,
          if: quickControl.buttons[1].value,
        },
        {
          url: "images/airplane.png",
          id: 101,
          if: quickControl.buttons[2].value,
        },
        {
          url:
            Volume === 0
              ? "images/audio0.png"
              : Volume > 75
              ? "images/audio3.png"
              : Volume > 50
              ? "images/audio2.png"
              : "images/audio1.png",
          id: 101,
          if: true,
        },
      ];
    },
  },
});

const desktop = new Vue({
  el: "#desktop",
  data: {
    apps: [
      { url: "images/window.png", name: "Window", id: "window", pinned: false, recommended: false },
      // { url: "images/search.png", name: "Search", id: "search", pinned: true },
      { url: "images/widget.png", name: "Widgets", id: "widgets", pinned: false, recommended: true },
      { url: "images/setting.png", name: "Setting", id: "setting", pinned: true, recommended: true },
      {
        url: "images/explorer.png",
        name: "File Explorer",
        id: "file-explorer",
        pinned: true,
        recommended: false
      },
      { url: "images/edge.png", name: "Edge", id: "edge", pinned: true, recommended: false },
      { url: "images/store.png", name: "Store", id: "store", pinned: true, recommended: true },
      { url: "images/store.png", name: "Store", id: "store", pinned: false, recommended: false },
      { url: "images/seven.png", name: "Seven", id: "seven", pinned: true, recommended: true },
      { url: "images/minecraft.png", name: "Minecraft", id: "minecraft", pinned: true, recommended: false },
      { url: "images/stick-ninja.png", name: "Stick Ninja", id: "stick-ninja", pinned: true, recommended: false },
      { url: "", name: "", id: "", pinned: false, recommended: false },
      { url: "", name: "", id: "", pinned: false, recommended: false },
      { url: "", name: "", id: "", pinned: false, recommended: false },
      { url: "", name: "", id: "", pinned: false, recommended: false },
      { url: "", name: "", id: "", pinned: false, recommended: false },
      { url: "", name: "", id: "", pinned: false, recommended: false },
      { url: "", name: "", id: "", pinned: false, recommended: false },
      { url: "", name: "", id: "", pinned: false, recommended: false },
      { url: "", name: "", id: "", pinned: false, recommended: false },
      { url: "", name: "", id: "", pinned: false, recommended: false },
      { url: "", name: "", id: "", pinned: false, recommended: false },
      { url: "", name: "", id: "", pinned: false, recommended: false },
      { url: "", name: "", id: "", pinned: false, recommended: false },
      { url: "", name: "", id: "", pinned: false, recommended: false },
      { url: "", name: "", id: "", pinned: false, recommended: false },
      { url: "", name: "", id: "", pinned: false, recommended: false },
      { url: "", name: "", id: "", pinned: false, recommended: false },
      { url: "", name: "", id: "", pinned: false, recommended: false },
    ],

    langs: config.dataLangs,

    appsData: {
      ["file-explorer"]: {
        open: false,
        maximized: false,
        zIndex: 0,
      },
      ["seven"]: {
        open: false,
        maximized: false,
        zIndex: 0,
        data: {
          account: {
            username: "Kholma1402",
            setting: {
              notif: false,
              lock: false,
              notif: false,
              offlineMode: false,
            },
            friends: {
              [0]: {
                username: "Berlin Morgan",
                online: false,
              },
              [1]: {
                username: "DuckWichTrust",
                online: true,
              },
            },
            friendRequests: {
              [0]: "Lenny Francis 2",
            },
          },
          users: {
            cartel: {
              [0]: {
                username: "Berlin Morgan",
                messageCount: 2,
              },
            },
            dealers: {
              [0]: {
                username: "Berlin Morgan",
                messageCount: 13402,
              },
              [1]: {
                username: "DuckWichTrust",
                messageCount: 0,
              },
            },
            clients: {
              [0]: {
                username: "Client 1",
                messageCount: 0,
              },
              [1]: {
                username: "Client 2",
                messageCount: 0,
              },
              [2]: {
                username: "Client 3",
                messageCount: 0,
              },
              [3]: {
                username: "Client 4",
                messageCount: 0,
              },
            },
          },
          shop: {},
          chat: {
            [0]: {
              from: "Berlin Morgan",
              to: "DuckWichTrust",
              message: "سلام",
            },
            [1]: {
              to: "Berlin Morgan",
              from: "DuckWichTrust",
              message: "سلام",
            },
          },
          chat_Username: "none",
          chat_input: "",
        },
      },
      ["minecraft"]: {
        open: false,
        maximized: false,
        zIndex: 0,
      },
      ["stick-ninja"]: {
        open: false,
        maximized: false,
        zIndex: 0,
      },
      ["command-prompt"]: {
        open: true,
        maximized: false,
        zIndex: 0,
      },
      ["setting"]: {
        open: false,
        maximized: false,
        zIndex: 0,
      },
    },

    selectedIndex: null,
    zIndex: 1,

    startMenu: false
  },
  methods: {
    Select: function (index) {
      if (this.apps[index].url !== "") {
        this.selectedIndex = index;
      }
    },
    Open: function (id) {
      // $.post(
      //   "https://United-laptop/getAppData",
      //   JSON.stringify({ app: id }),
      //   (data) => {
      //     console.log(data);
      //     if (data) {
      //       this.appsData[id].data = data;
      //     }

          this.appsData[id].open = true;
          if (taskbar.apps[id]) {
            taskbar.apps[id].active = true;
          } else {
            taskbar.apps[id] = {
              url: "images/" + id + ".png",
              name: id,
              active: true,
            };
          }

      //     taskbar.$forceUpdate();
      //   }
      // );

      // this.zIndex = this.zIndex + 1
      // this.appsData[id].zIndex = this.zIndex
    },
    Close: function (id, minimize) {
      console.log(id, minimize);
      this.appsData[id].open = false;
      if (!minimize) {
        // console.log(taskbar.apps[id].id)
        if (!taskbar.apps[id].id) {
          delete taskbar.apps[id];
        } else {
          taskbar.apps[id].active = false;
        }
      }
      taskbar.$forceUpdate();
    },
    Maximize: function (id) {
      console.log("Maximize app");
      this.appsData[id].maximized = !this.appsData[id].maximized;
    },
    getAppFront: function (id) {
      // console.log("Clicked on toolbar", id);
      if (this.zIndex === this.appsData[id].zIndex) {
        // console.log("wtf");
        return;
      }
      this.zIndex = this.zIndex + 1;
      this.appsData[id].zIndex = this.zIndex;
    },

    // apps functions
    changeShopItemStatus(index) {
      this.appsData["seven"].data.shop[index].active =
        !this.appsData["seven"].data.shop[index].active;
      $.post(
        "https://United-laptop/UpdateShopItemStatus",
        JSON.stringify({ id: index })
      );
    },
    toggleShopItemEdit(index) {
      this.appsData["seven"].data.shop[index].edit =
        !this.appsData["seven"].data.shop[index].edit;
      $.post(
        "https://United-laptop/UpdateShopItemPrice",
        JSON.stringify({
          id: index,
          price: this.appsData["seven"].data.shop[index].price,
        })
      );
    },
    DeleteShopItem(index) {
      delete this.appsData["seven"].data.shop[index];
      $.post(
        "https://United-laptop/DeleteShopItem",
        JSON.stringify({
          id: index,
        })
      );
    },
    sevenChangeSetting(type) {
      if (type === "notif") {
        this.appsData["seven"].data.account.setting.notif =
          !this.appsData["seven"].data.account.setting.notif;
      } else if (type === "offlineMode") {
        this.appsData["seven"].data.account.setting.offlineMode =
          !this.appsData["seven"].data.account.setting.offlineMode;
      } else if (type === "lock") {
        this.appsData["seven"].data.account.setting.lock =
          !this.appsData["seven"].data.account.setting.lock;
      } else if (type === "radar") {
        this.appsData["seven"].data.account.setting.radar =
          !this.appsData["seven"].data.account.setting.radar;
      }
      $.post(
        "https://United-laptop/UpdateSetting",
        JSON.stringify({
          setting: this.appsData["seven"].data.account.setting,
        })
      );
    },
    sevenAddFriend(citizenid) {
      $.post(
        "https://United-laptop/sevenAddFriend",
        JSON.stringify({
          id: citizenid,
        })
      );
    },
    AcceptSevenFriendRequest(citizenid, name) {
      delete this.appsData["seven"].data.account.friendRequests[citizenid];
      console.log(this.appsData["seven"].data.account.friends);
      $.post(
        "https://United-laptop/AcceptSevenFriendRequest",
        JSON.stringify({
          id: citizenid,
        }),
        function (newData) {
          console.log(newData);
          desktop.appsData["seven"].data = newData;
          desktop.$forceUpdate();
        }
      );
    },

    SevenRemoveFriend(citizenid) {
      delete this.appsData["seven"].data.account.friends[citizenid];
      $.post(
        "https://United-laptop/SevenRemoveFriend",
        JSON.stringify({
          id: citizenid,
        })
      );
      desktop.$forceUpdate();
    },
    SevenOpenChat(username) {
      this.appsData["seven"].data.chat_Username = username;
      openPage(null, "chat");
      $.post(
        "https://United-laptop/GetSeventChat",
        JSON.stringify({ id: username }),
        function (data) {
          desktop.appsData["seven"].data.chat = data;
          console.log(data);
        }
      );
    },
    sevenSendMessage(username) {
      $.post(
        "https://United-laptop/sendSevenChatMessage",
        JSON.stringify({
          id: username,
          message: this.appsData["seven"].data.chat_input,
        })
      );

      console.log("wtf");
      this.appsData["seven"].data.chat[
        this.appsData["seven"].data.chat.length
      ] = {
        id: this.appsData["seven"].data.chat.length + 1,
        from: this.appsData["seven"].data.account.username,
        to: username,
        message: this.appsData["seven"].data.chat_input,
        timestamp: new Date(),
      };

      desktop.appsData["seven"].data.chat_input = "";
      desktop.$forceUpdate();
    },
    requestForBounty(id) {
      $.post(
        "https://United-laptop/SevenRequestForBounty",
        JSON.stringify({
          id: id,
        })
      );
    },
    BountyAccept() {},
  },
  updated: function () {
    $(".draggable").draggable({
      containment: $("#desktop"),
      handle: ".toolbar",
      cancel: ".maximized",
    });
    // if ($('iframe')) {
    $("iframe").on("load", (ev) => {
      const new_style_element = document.createElement("style");
      new_style_element.textContent = ".referer-warning { display: none; }";
      console.log(ev.target);
      ev.target.contentDocument.head.appendChild(new_style_element);
    });
    // }
  },
});

const brightoverlay = new Vue({
  el: "#brightoverlay",
  computed: {
    brightness: function () {
      return (-1 * (Number(quickControl.buttons[6].value) - 80)) / 100;
    },
    nightLight: function () {
      let color = quickControl.buttons[5].value;
      return color;
    },
  },
});

//

function openPage(evt, pageName) {
  var i, tabcontent, clickItem;

  tabcontent = document.getElementsByClassName("right-sidebar");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  clickItem = document.getElementsByClassName("footer-item");
  for (i = 0; i < clickItem.length; i++) {
    clickItem[i].className = clickItem[i].className.replace(" active", "");
  }

  document.getElementById(pageName).style.display = "flex";
  if (evt) {
    evt.currentTarget.className += " active";
  }
}

function changeColor(element, color) {
  $(element).css("color", color);
}

// fivem stuffs

let visible = false;

window.addEventListener("message", function (event) {
  var data = event.data;

  switch (data.action) {
    case "toggle":
      if (visible) {
        $("body").fadeOut();
      } else {
        $("body").fadeIn();
      }
      visible = !visible;
      break;

      if (data.html !== "none") {
        loadwebsite(data.html);
      } else {
        $("#browser_content").empty();
      }
      break;
  }
});

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 27 && visible) {
    $.post("https://United-laptop/close");
  }
});

// Testing
$("body").fadeIn();



// function testingNSFW(url) { should done by lua
//   console.log('wtf2', url)
//   // $.post(
//   //   `https://api.imagga.com/v2/categories/nsfw_beta?image_url=https://imagga.com/static/images/nsfw/?apiKey=acc_1660e25659e6abe&apiSecret=837eb543efb5d5f0c91365349241e88b&url=${url}`,
//   //   JSON.stringify({}),
//   //   function (respone) {
//   //     console.log('wtf')
//   //     console.log(Respone)
//   //   }
//   // );

//   $.ajax({
//     url: 'https://api.imagga.com/v2/categories/nsfw_beta',
//     type: 'post',
//     data: {
//       image_url: 'https://imagga.com/static/images/nsfw/girl-1211435_960_720.jpg',
//     },
//     headers: {
//       apiKey: 'acc_1660e25659e6abe',
//       apiSecret: '837eb543efb5d5f0c91365349241e88b',
//     },
//     dataType: 'json',
//     success: function (data) {
//         console.info(data);
//     }
// });
// }