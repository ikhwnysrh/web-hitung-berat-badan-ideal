function calculateBMI() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const activity = document.getElementById("activity").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100;

    if (!name || !age || !weight || !height) {
        alert("Mohon isi semua data.");
        return;
    }

    const bmi = weight / (height * height);
    let category;

    if (bmi < 18.5) {
        category = "Kekurangan berat badan";
    } else if (bmi < 24.9) {
        category = "Berat badan normal";
    } else if (bmi < 29.9) {
        category = "Kelebihan berat badan";
    } else {
        category = "Obesitas";
    }

    const activityLevel = activity === "low" ? "Rendah" : activity === "moderate" ? "Sedang" : "Tinggi";

    document.getElementById("result").innerHTML = `
        <strong>Hasil:</strong><br>
        Nama: ${name}<br>
        Usia: ${age} tahun<br>
        Jenis Kelamin: ${gender === "male" ? "Laki-laki" : "Perempuan"}<br>
        Tingkat Aktivitas: ${activityLevel}<br>
        BMI: ${bmi.toFixed(2)} (${category})
    `;
}
