const fs = require('fs');
const fetch = require('node-fetch');

async function updateReadme() {
  // GitHub API'si ile dil yüzdelerini al
  const response = await fetch('https://api.github.com/users/omergediks/repos/languages', {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  });
  const data = await response.json();

  // README dosyasını güncelle
  const readmePath = 'README.md';
  let readmeContent = fs.readFileSync(readmePath, 'utf8');
  // TODO: README içeriğini dil yüzdeleri ile güncelle
  // Örnek olarak: readmeContent = readmeContent.replace('DIL_YUZDELERI', JSON.stringify(data));
  fs.writeFileSync(readmePath, readmeContent);
}

updateReadme();
