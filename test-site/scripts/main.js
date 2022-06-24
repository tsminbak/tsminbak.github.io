// ����ͼƬ�л�
let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox1.png') {
        myImage.setAttribute('src', 'images/google.png');
    } else {
        myImage.setAttribute('src', 'images/firefox1.png');
    }
}

// ���ø��Ի���ӭ��Ϣ
// ��ȡ�°�ť�ͱ��������
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// ���Ի���ӭ��Ϣ���ú���
function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla bout it,' + myName;
    }
}

// ��ʼ�����룺��ҳ����ζ�ȡʱ���й��칤����
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla bout it,' + storedName;
}

// Ϊ��ť���� onclick �¼���������
myButton.onclick = function () {
    setUserName();
};