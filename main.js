function showFunFact() {
    const facts = [
        "Մարդու մարմինը մոտ 60%-ով ջրից է կազմված։",
        "Մոլորակի ջրի միայն 1%-ը կարող է օգտագործվել խմելու համար։",
        "Ջուրը չի կարող ունենալ բացարձակապես նույն ջերմաստիճանը բոլոր վայրերում։",
        "Ջրի մեկ լիտրը կարող է կշռել 1 կգ։"
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('extra-fact').innerText = randomFact;
}
