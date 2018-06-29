import { Component, OnInit, AfterViewInit } from '@angular/core';
// import { AgoraRTC } from '../../../../assets/js/AgoraRTCSDK-2.3.1.js'
const AgoraRTC = require('../../../../assets/js/AgoraRTCSDK-2.3.1.js');

@Component({
  selector: 'app-agora-demo',
  templateUrl: './agora-demo.component.html',
  styleUrls: ['./agora-demo.component.css']
})
export class AgoraDemoComponent implements OnInit, AfterViewInit {

  client: any;
  appId = 'ca36f19151934467adca8d9cab4de2f6';
  uid: number = 111111;
  localStream: any;

  channelKey: string = 'aaa';

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.initClient();
  }

  initClient() {
    if (!AgoraRTC.checkSystemRequirements()) {
      alert("browser is no support webRTC");
      return;
    }
    this.client = AgoraRTC.createClient({ mode: 'interop' });
    this.client.init(this.appId, () => {
      console.log("AgoraRTC client initialized");
      this.join();
    });
  }
  leave() {
    this.client.leave(function () {
      console.log("Leavel channel successfully");
    }, function (err) {
      console.log("Leave channel failed");
      });
    this.unpublish();
  }

  unpublish() {
    this.client.unpublish(this.localStream, function (err) {
      console.log("Unpublish local stream failed" + err);
    });
  }

  join() {
    this.client.join(null, this.channelKey, undefined, (uid) => {
      console.log("User " + uid + " join channel successfully");
      console.log("Timestamp: " + Date.now());
      this.uid = uid;
      this.createStream();
      // this.publishStream();
    }, function (err) {
      console.error("client join failed ", err);
      //error handling
    });
  }

  createStream() {
    let options = {
      streamID: this.uid,
      audio: true,
      video: true,
      screen: false,
      //chrome extension id
      //extensionId: "minllpmhdgpndnkomcoccfekfegnlikg"
    }
    this.localStream = AgoraRTC.createStream(options);
    this.localStream.setVideoProfile("480p_4");
    this.localStream.init(() => {
      this.localStream.play("agora-remote");
      console.log("Local stream initialized");
      this.publishStream();
      this.setStreamListener();
    });
  }

  publishStream() {
    this.client.publish(this.localStream, function (err) {
      console.log("Publish stream failed", err);
    });
  }

  setStreamListener() {
    this.client.on('stream-added', function (evt) {
      let stream = evt.stream;
      console.log("New stream added: " + stream.getId());
      console.log("Timestamp: " + Date.now());
      console.log("Subscribe ", stream);
      //在有新的流加入后订阅远端流
      this.client.subscribe(stream, function (err) {
        console.log("Subscribe stream failed", err);
      });
    });

    /*
    @event: peer-leave when existing stream left the channel
    */
    this.client.on('peer-leave', function (evt) {
      console.log("Peer has left: " + evt.uid);
      console.log("Timestamp: " + Date.now());
      console.log(evt);
    });

    /*
    @event: stream-subscribed when a stream is successfully subscribed
    */
    this.client.on('stream-subscribed', function (evt) {
      let stream = evt.stream;
      console.log("Got stream-subscribed event");
      console.log("Timestamp: " + Date.now());
      console.log("Subscribe remote stream successfully: " + stream.getId());
      console.log(evt);
    });

    /*
    @event: stream-removed when a stream is removed
    */
    this.client.on("stream-removed", function (evt) {
      let stream = evt.stream;
      console.log("Stream removed: " + evt.stream.getId());
      console.log("Timestamp: " + Date.now());
      console.log(evt);
    });
  }

}
