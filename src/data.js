import post1 from "./assets/post-1.jpg";
import post2 from "./assets/post-2.jpg";
import img from "./assets/IMG_3152.jpg";

import friend1 from "./assets/houcine-ncib-B4TjXnI0Y2c-unsplash.jpg";
import friend2 from "./assets/joseph-pearson-827XUhVSp8M-unsplash.jpg";
import friend3 from "./assets/kelly-sikkema-JN0SUcTOig0-unsplash.jpg";
import friend4 from "./assets/sergio-de-paula-c_GmwfHBDzk-unsplash.jpg";
import friend5 from "./assets/vicky-hladynets-C8Ta0gwPbQg-unsplash.jpg";

import search1 from "./assets/search/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import search2 from "./assets/search/ian-dooley-d1UPkiFd04A-unsplash.jpg";
import search3 from "./assets/search/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import search4 from "./assets/search/susan-g-komen-3-day-6RlHij-pwpw-unsplash.jpg";
import search5 from "./assets/search/toa-heftiba-O3ymvT7Wf9U-unsplash.jpg";

import video1 from "./assets/video/pexels-mariam-antadze-8538237-1440x2492-60fps.mp4"
import video2 from "./assets/video/pexels-mehmet-ali-turan-4678261-1080x1920-25fps.mp4"
import video3 from "./assets/video/pexels-taryn-elliott-9116154-1080x1920-25fps.mp4"


import posts1 from "./assets/profile/code-1.jpg"
import posts2 from "./assets/profile/code-2.jpg"
import posts3 from "./assets/profile/code-3.jpg"

import saved1 from "./assets/profile/sunset-1.jpg"
import saved2 from "./assets/profile/sunset-2.jpg"
import saved3 from "./assets/profile/sunset-3.jpg"

import tag1 from "./assets/profile/sadness-1.jpg"
import tag2 from "./assets/profile/sadness-2.jpg"
import tag3 from "./assets/profile/sadness-3.jpg"

const listPost = [
  {
    id: 1,
    name: "programmer.me",
    imgPhoto: img,
    postPhoto: post1,
    likes: "1,890",
    isFollow: true,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquaconsectetur quae sed pariatur aliquid esse libero error, assumendaexplicabo Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquaconsectetur quae sed pariatur aliquid esse libero error, assumendaexplicabo nam nam.",
  },
  {
    id: 2,
    name: "hello_world56",
    imgPhoto: friend2,
    postPhoto: post2,
    likes: "3,567",
    isFollow: false,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquaconsectetur quae sed pariatur aliquid esse libero error, assumendaexplicabo Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquaconsectetur quae sed pariatur aliquid esse libero error, assumendaexplicabo nam nam.",
  },
];


export default listPost;

export const listOfFriends = [
  {
    id: 1,
    img: friend1,
    name: "Houcin Ncib",
  },
  {
    id: 2,
    img: friend2,
    name: "Joseph Pearson",
  },
  {
    id: 3,
    img: friend3,
    name: "Kelly Sikema",
  },
  {
    id: 4,
    img: friend4,
    name: "Sergio De Paula",
  },
  {
    id: 5,
    img: friend5,
    name: "Vicky Hladynets",
  },
];

export const searchFriend = [
  {
    id: 1,
    name: "Auny Huast",
    username: "unyy__H",
    img: search1,
  },
  {
    id: 2,
    name: "Ian Dooley",
    username: "iannDooley",
    img: search2,
  },
  {
    id: 3,
    name: 'Michael Dam',
    username: 'chaelDam_you',
    img: search3
  },
  {
    id: 4,
    name: 'Susan G Komen',
    username: 'komennn_susan',
    img: search4
  },
  {
    id: 5,
    name: 'Toa Heftiba',
    username: 'tiba_hef23',
    img: search5
  }
];


export const videos = [
  {
    id: 1,
    vid: video1,
    name: 'Auny Huast',
    imgPhoto: search1,
    isFollow: true,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquaconsectetur libero error, assumendaexplicabo Lorem ipsum.",
  },
  {
    id: 2,
    vid: video2,
    name: 'Ian Dooley',
    imgPhoto: search2,
    isFollow: false,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquaconsectetur libero error, assumendaexplicabo Lorem ipsum.",
  },
  {
    id: 3,
    vid: video3,
    name: 'Michael Dam',
    imgPhoto: search3,
    isFollow: true,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquaconsectetur libero error, assumendaexplicabo Lorem ipsum.",
  },
];


export const messageData = [
  {
    id: 1,
    img: friend1,
    name: "Houcin Ncib",
    chat: 'consectetur adipisicing elit. assumendaexplicabo Lorem ipsum',
    username: 'cin__cib'
  },
  {
    id: 2,
    img: friend2,
    name: "Joseph Pearson",
    chat: 'consectetur adipisicing elit. assumendaexplicabo Lorem ipsum',
    username: 'oseph_pear'
  },
  {
    id: 3,
    img: friend3,
    name: "Kelly Sikema",
    chat: 'consectetur adipisicing elit. assumendaexplicabo Lorem ipsum',
    username: 'kelly.'
  },
  {
    id: 4,
    img: friend4,
    name: "Sergio De Paula",
    chat: 'consectetur adipisicing elit. assumendaexplicabo Lorem ipsum',
    username: 'its_geo23'
  },
  {
    id: 5,
    img: friend5,
    name: "Vicky Hladynets",
    chat: 'consectetur adipisicing elit.  assumendaexplicabo Lorem ipsum',
    username: 'just_call_vicky'
  },
];


export const profileImg = [
  {
    id: 1,
    name: 'POST',
    img1: posts1,
    img2: posts2,
    img3: posts3,
  },
  {
    id: 2,
    name: 'SAVED',
    img1: saved1,
    img2: saved2,
    img3: saved3,
  },
  {
    id: 3,
    name: 'TAGGED',
    img1: tag1,
    img2: tag2,
    img3: tag3,
  },
]