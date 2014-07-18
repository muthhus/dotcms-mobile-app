$.args = arguments[0] || {};
var pageTitle = $.args.title;

var data = {"contentlets":[{"stInode":"2a3e91e4-fbbf-4876-8c5b-2233c1739b05","owner":"dotcms.org.1","lastReview":"2012-12-11 09:36:09.154","modUser":"dotcms.org.1","identifier":"767509b1-2392-4661-a16b-e0e31ce27719","sortOrder":0,"body":"<p><img src=\"\/contentAsset\/image\/7de092d3-d051-4898-8623-48113b4ec1ca\/fileAsset\/byInode\/1\/filter\/Resize\/resize_w\/700\"><\/p>\n<p>Curabitur viverra metus et dui viverra sollicitudin. This is a test. Maecenas dapibus tristique orci, et viverra metus suscipit vel. Quisque hendrerit, neque sit amet fermentum vulputate, arcu augue eleifend diam, malesuada molestie quam nibh at neque. In non risus at felis adipiscing molestie ac sed diam. Vivamus sit amet purus at libero pellentesque sagittis. Integer a enim turpis, vitae dignissim dui. Nulla eu leo id sapien facilisis pulvinar non quis justo. Morbi tempor, est quis elementum euismod, nibh metus faucibus enim, a viverra mi massa sit amet dui. Aenean id sapien mi, vel dapibus enim. Duis diam erat, malesuada sed fringilla non, rhoncus eget mauris. Praesent sit amet orci purus. Mauris hendrerit lectus ut justo aliquam eleifend. Curabitur bibendum congue luctus.<\/p>\n<blockquote>Nulla rutrum facilisis odio sed interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus risus libero, cursus nec iaculis eget, pretium et augue. Proin ultricies dapibus elit et ornare. Phasellus feugiat suscipit leo. Morbi eu mi volutpat quam aliquam fringilla vitae vitae libero. Duis convallis dapibus molestie. In egestas lorem vitae eros varius adipiscing. <span>—&nbsp;Timothy Brigham, CEO Quest Financial<br><\/span><\/blockquote>\n<p>Nulla rutrum facilisis odio sed interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus risus libero, cursus nec iaculis eget, pretium et augue. Proin ultricies dapibus elit et ornare. Phasellus feugiat suscipit leo. Morbi eu mi volutpat quam aliquam fringilla vitae vitae libero. Duis convallis dapibus molestie. In egestas lorem vitae eros varius adipiscing. Nulla accumsan tincidunt blandit. Duis elementum sapien at turpis pellentesque faucibus. Pellentesque rhoncus lobortis vulputate. Nullam placerat fringilla tincidunt.<\/p>","__DOTNAME__":"About Quest","host":"48190c8c-42c4-46af-8d1a-0cd5db894797","modDate":"2013-05-28 09:50:12.597","title":"About Quest","languageId":1,"inode":"74f9338d-69de-4d7a-b82d-23c24add6a5b","folder":"SYSTEM_FOLDER"}]}

var aboutUsHtml = data.contentlets[0].body;
var imageUrl = aboutUsHtml.match(/"([^>]+)/g)[0];

// TODO: find a better way to parse/encode HTML
var content = aboutUsHtml.replace(/<[^>]*>?/g, '');
content = content.replace('\n', '');
content = content.replace('—&nbsp;', '— ');

$.aboutImage.image = 'http://demo.dotcms.com/contentAsset/image/7de092d3-d051-4898-8623-48113b4ec1ca/fileAsset/byInode/1/filter/Resize/resize_w/700';
$.title.text = pageTitle;
$.aboutBody.text = content;