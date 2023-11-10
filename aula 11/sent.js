const Sentiment = require('sentiment');
const sentiment = new Sentiment();
const messages = [
    "porra",
    "Eu não gosto dessa situação.", 
    "Isso é incrível!",
    "Estou me sentindo mal hoje.",
];
console.log(sentiment.analyze(messages))
messages.forEach((message, index) => {
  const result = sentiment.analyze(message);
  console.log(`Mensagem ${index + 1}:`);
  console.log(`Texto: ${message}`);
  console.log(`Pontuação: ${result.score}`);
  console.log(`Comparativo: ${result.score > 0 ? 'Boa' : 'Ruim'}`);
  console.log('---');
});
