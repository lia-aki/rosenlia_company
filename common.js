// ヘッダー、フッター、お知らせの共通部分を生成する関数
function createCommonElements() {
    // ヘッダーを生成
    const header = document.createElement('header');
    header.innerHTML = `
        <h1>☆☆RosenliaDoll☆☆</h1>
        <nav>
            <ul>
                <li><a href="index.html">ホーム</a></li>
                <li><a href="products.html">商品一覧</a></li>
                <li><a href="about.html">会社概要</a></li>
            </ul>
        </nav>
    `;
    document.body.insertBefore(header, document.body.firstChild);

    // お知らせを生成
    const announcement = document.createElement('div');
    announcement.id = 'announcement';
    announcement.innerHTML = '<p>新作ドレスが入荷しました！Boothページをチェックしてください。</p>';
    document.body.insertBefore(announcement, header.nextSibling);

    // メインコンテンツのラッパーを生成
    const main = document.createElement('main');
    // 既存のbody内の要素をmainに移動
    while (document.body.children.length > 2) { // ヘッダーとお知らせの後の要素
        main.appendChild(document.body.children[2]);
    }
    document.body.appendChild(main);

    // プロフィール画像を設定
    const profileImage = document.getElementById('profile-image');
    if (profileImage) {
        profileImage.src = './images/aki.png';
        profileImage.alt = 'RosenliaDoll プロフィール画像';
    }

    // フッターを生成
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="social-icons">
            <a href="https://x.com/Rosenlia_doll" target="_blank" rel="noopener noreferrer">
                <img src="./images/twitter.png" alt="Twitter" class="social-icon">
            </a>
        </div>
        <p>&copy; 2024 RosenliaDoll. All rights reserved.</p>
    `;
    document.body.appendChild(footer);
}

// DOMContentLoaded イベントで共通要素を生成
document.addEventListener('DOMContentLoaded', createCommonElements);