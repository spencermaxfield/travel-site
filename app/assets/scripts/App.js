import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import $ from 'jquery';

let mobileMenu = new MobileMenu();
let featuresRevealOnScroll = new RevealOnScroll($('.feature-item'), '85%');
let testimonialsRevealOnScroll = new RevealOnScroll($('.testimonial'), '60%');
let stickyHeader = new StickyHeader();
let modal = new Modal();
