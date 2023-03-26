import axios from 'axios';

export default async function fetchCarOptions(): Promise<{
  success: boolean;
  data: Array<{label: string; value: string}> | null;
}> {
  const {data} = await axios.get(
    'https://dropdown-test.sakshambhatt.repl.co/car-options',
  );
  return data;
}
