# Fokus & Maqsad — Focus & Goal Engine 🎯

Ilgʻor talabalar, dasturchilar va oʻz oldiga ulkan maqsadlar qoʻygan yoshlar uchun ishlab chiqilgan, mobilga yoʻnaltirilgan zamonaviy **Progressive Web Application (PWA)**.

---

## 🌟 Asosiy Modullar va Imkoniyatlar

### 1. 🎯 Ierarxik Maqsadlar & Kunlik Odatlar Trekeri
- **Katta Maqsad (Vision)**: Harvard, MIT, Google yoki orzuingizdagi maqsadga qolgan kunlar va soatlarni hisoblovchi jonli Countdown soati.
- **Kaskadli Ierarxiya**:
  - `Kunlik 8 Asosiy Fokus` ➔ `Haftalik Rejalar` ➔ `Oylik Marralar` ➔ `Yillik Maqsadlar` ➔ `Katta Orzu (Vision)`.
- **Kunlik Samaradorlik Formulasi**:
  $$\text{Samaradorlik} = \left(\frac{\text{Bajarilgan Vazifalar}}{\text{Jami Vazifalar}} \times 50\%\right) + \left(\frac{\text{Kunlik Sifat}}{10} \times 50\%\right)$$
- 100% ga erishilganda oltin konfetti va XP bonuslari!

### 2. ⏱️ "Ilm Xonasi" (Advanced Deep Work & Pomodoro)
- **Fokus & Tanaffus Bosqichlari**: 25/50 daqiqalik chuqur fokus, qisqa va uzoq tanaffuslar, sikllar hisoblagichi.
- **Drift-Free Taymer**: Ekran oʻchganda yoki boshqa ilovaga oʻtganda ham vaqt aniq hisoblanadi.
- **Sintez qilingan Ambient Tovushlar**:
  - 🌧️ Yomgʻir tomchilari
  - 💨 Jigarrang / Oq shovqin
  - ☕ Qahvaxona muhiti
  - 📻 **40Hz Gamma Binaural Beats** (Maksimal diqqat toʻlqini)
- **Fokus Analitikasi**: Kunlik, haftalik, jami soatlar statistikasi va 24 soatlik Peak Heatmap.

### 3. 💬 "Birga" (Masʼuliyat & Hamjamiyat Tarmogʻi)
- Kunlik hisobotlar, motivatsion fikrlar va katta yutuqlarni ulashish.
- Reddit/Twitter uslubidagi upvote va qoʻllab-quvvatlash reaksiyalari (`🔥`, `🎯`, `👏`, `❤️`).
- Xohishga koʻra **Anonim** yoki tasdiqlangan profil bilan post qoldirish.
- Tarmoqlangan sharhlar (Threaded comments).

### 4. 🏆 Dinamik Reyting & Gamifikatsiya
- 10 bosqichli unvonlar pogʻonasi (Boshlovchi ➔ Grossmeyster ➔ Grandmaster).
- 3 xil reyting toifalari: Fokus Soatlari, Maqsadlar Bajarilishi %, Uzluksiz Streak.
- Top 3 shohsupa (Oltin, Kumush, Bronza).

### 5. 👤 Profil & Sozlamalar
- Dark Mode, Light Mode va AMOLED Deep Black (#000000) mavzulari.
- Supabase PostgreSQL toʻliq RLS xavfsizlik sxemasi.
- Maʼlumotlarni JSON holatida eksport qilish (Backup).
- PWA orqali telefonga ilova sifatida oʻrnatish (Offline support).

---

## 🚀 Ishga Tushirish (Quickstart)

```bash
# 1. Bogʻliqliklarni oʻrnatish
npm install

# 2. Dasturni dev rejimida ishga tushirish
npm run dev

# 3. Ishlab chiqarish (Production) uchun build qilish
npm run build
```

---

## 🔄 GitHub Avtomatik Deploy (CI/CD) Sozlash

Loyihada **har bir yangi `git commit` va `push` qilinganda avtomatik ravishda saytni yangilovchi (CI/CD)** tizim toʻliq sozlangan (`.github/workflows/deploy.yml` va `vercel.json`).

### 1-Usul: GitHub Pages orqali avtomatik deploy (100% Bepul)

1. [github.com/new](https://github.com/new) sahifasiga oʻtib, yangi boʻsh ombor (repository) oching (masalan, `fokus-va-maqsad`).
2. Loyiha papkasida terminalni ochib quyidagi buyruqlarni yozing:
   ```bash
   git init
   git add .
   git commit -m "feat: first release with auto-deploy"
   git branch -M main
   git remote add origin https://github.com/SIZNING_USERNAMINGIZ/fokus-va-maqsad.git
   git push -u origin main
   ```
3. GitHub omboringizga kiring: **Settings** ➔ **Pages** boʻlimiga oʻting.
4. **Build and deployment** boʻlimidagi **Source** menyusidan **GitHub Actions** ni tanlang.
5. Tayyor! Endi har safar kodga oʻzgartirish kiritib `git push` qilganingizda, GitHub Actions avtomatik ravishda loyihani build qilib, soʻnggi versiyani jonli efirga chiqaradi.

### 2-Usul: Vercel orqali avtomatik deploy (Tavsiya etiladi)

1. [vercel.com](https://vercel.com) ga kiring va GitHub profilingiz orqali ulaning.
2. **Add New...** ➔ **Project** tugmasini bosing va `fokus-va-maqsad` omborini tanlang.
3. **Deploy** tugmasini bosing.
4. Endi har safar GitHub ga yangi commit push qilganingizda Vercel soniyalar ichida avtomatik deploy qiladi.


---

## 🗄️ Supabase PostgreSQL Sxemasi
Profilingizdagi "Supabase PostgreSQL Schema" tugmasini bosing yoki `src/lib/supabase.ts` faylidagi tayyor SQL kodni Supabase Dashboard SQL Editor oynasida bajaring.
