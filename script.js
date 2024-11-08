
alert('Sizda hozir random sonlar chiqishni boshledi😉');

let randomFrom10to100 = Math.floor(Math.random() * 91) + 10; 
alert(`Random orqali chiqqan son: ${randomFrom10to100}`);

confirm('Biz random sonni 2ga ko`paytirmoqchi va bo`lmoqchimiz!');

let son = randomFrom10to100 * 2;

let son2 = son / 2;

let son3 = son2 % 3;

alert(`Random orqali chiqqan son: ${randomFrom10to100} edi.\n` +
    `Biz uni 2ga ko'paytirib ${son} sonini chiqardik,\n` +
    `va shu sonni 2ga bo'lib: ${son2} sonini chiqardik,\n` +
    `va shu sonni 3ga bo'lgandagi qoldiq: ${son3} sonini chiqardik.`
);