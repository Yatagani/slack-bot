const main = async (event: any) => {
  console.log('Fire in the hole!!');

  return {
    body: JSON.stringify({ message: 'SUCCESS'}),
    statusCode: 200,
  };
}

export default main;