document.addEventListener('DOMContentLoaded', function() {
    // ナビゲーションのスムーズスクロールを削除

    // 簡単な挨拶メッセージ
    const currentHour = new Date().getHours();
    let greeting;
    
    if (currentHour < 12) {
        greeting = 'おはようございます';
    } else if (currentHour < 18) {
        greeting = 'こんにちは';
    } else {
        greeting = 'こんばんは';
    }

    const welcomeMessage = document.querySelector('#home p');
    if (welcomeMessage) {
        welcomeMessage.textContent = `${greeting}！ ${welcomeMessage.textContent}`;
    }

    // プロフィール関連の要素を取得
    const profileDisplay = document.getElementById('profile-display');
    const profileForm = document.getElementById('profile-form');
    const editButton = document.getElementById('edit-profile');
    const displayName = document.getElementById('display-name');
    const displayDollType = document.getElementById('display-doll-type');
    const nameInput = document.getElementById('name');
    const dollTypeInput = document.getElementById('doll-type');
    const profileImage = document.getElementById('profile-image');
    const profileImageUpload = document.getElementById('profile-image-upload');

    // 保存されたプロフィール情報を表示
    function displayProfile() {
        const savedName = localStorage.getItem('userName') || '未設定';
        const savedDollType = localStorage.getItem('userDollType') || '未設定';
        const savedImageUrl = localStorage.getItem('userProfileImage');
        
        displayName.textContent = savedName;
        displayDollType.textContent = savedDollType;
        if (savedImageUrl) {
            profileImage.src = savedImageUrl;
        }
    }

    // 初期表示
    displayProfile();

    // 編集ボタンのイベントリスナー
    editButton.addEventListener('click', function() {
        profileDisplay.style.display = 'none';
        profileForm.style.display = 'block';
        nameInput.value = localStorage.getItem('userName') || '';
        dollTypeInput.value = localStorage.getItem('userDollType') || '';
    });

    // 画像アップロードのイベントリスナー
    profileImageUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImage.src = e.target.result;
                localStorage.setItem('userProfileImage', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });

    // フォーム送信のイベントリスナー
    profileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        localStorage.setItem('userName', nameInput.value);
        localStorage.setItem('userDollType', dollTypeInput.value);
        displayProfile();
        profileForm.style.display = 'none';
        profileDisplay.style.display = 'block';
    });
});