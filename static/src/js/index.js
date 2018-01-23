/* global window document */
window.jQuery = window.$ = require('jquery');

const $ = window.$;

require('bootstrap/dist/js/bootstrap.bundle');
require('eldarion-ajax');

const React = require('react');
const ReactDOM = require('react-dom');
const ImagePanel = require('pinax-images-panel');

import ajaxSendMethod from './ajax';
import handleMessageDismiss from './messages';

$(() => {
    $(document).ajaxSend(ajaxSendMethod);

    // Topbar active tab support
    $('.topbar li').removeClass('active');

    const classList = $('body').attr('class').split(/\s+/);
    $.each(classList, (index, item) => {
        const selector = `ul.nav li#tab_${item}`;
        $(selector).addClass('active');
    });

    $('#account_logout, .account_logout').click(e => {
        e.preventDefault();
        $('#accountLogOutForm').submit();
    });

    const imagePanelElement = document.getElementById('image-panel');
    if (imagePanelElement) {
      const imagesUrl = imagePanelElement.getAttribute('data-images-url');
      const imageSetId = parseInt(imagePanelElement.getAttribute('data-image-set-id'), 10);
      const uploadUrl = imagePanelElement.getAttribute('data-upload-url');
      ReactDOM.render(<ImagePanel imagesUrl={imagesUrl} initialUploadUrl={uploadUrl} initialImageSetId={imageSetId}/>, imagePanelElement);
    }

    handleMessageDismiss();
});
