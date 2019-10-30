/**
 * @format
 */

import 'react-native';
import axios from 'axios';
import * as Yup from 'yup';

describe('Integrated List of Github repositories', () => {
  const RepositorySchema = Yup.object().shape({
    total_count: Yup.number().required(),
    incomplete_results: Yup.boolean(),
    items: Yup.array().of(
      Yup.object().shape({
        id: Yup.number().required(),
        node_id: Yup.string().required(),
        full_name: Yup.string().required(),
        private: Yup.boolean().required(),
        owner: Yup.object().shape({
          login: Yup.string().required(),
          avatar_url: Yup.string(),
        }),
        html_url: Yup.string().required(),
      }),
    ),
  });

  const url = 'https://api.github.com/search/repositories?q=react-native';

  const fetch = () =>
    axios
      .get(url)
      .then(res => res.data)
      .catch(err => err.response.data);

  it('should be return repositories based on query', async () => {
    const {items} = await fetch();

    const filterRepo = items.some(item => item.name.includes('react-native'));

    expect(items.length).toBeGreaterThan(1);
    expect(filterRepo).toBe(true);
  });

  it('should not be return repositories based on query', async () => {
    const {items} = await fetch();

    const filterRepo = items.some(item => item.name.includes('daudhuad-dsda'));

    expect(filterRepo).toBe(false);
  });

  it('should be return correctly payload repositories ', async () => {
    const response = await fetch();
    const isValidSchema = await RepositorySchema.isValid(response);

    expect(isValidSchema).toBe(true);
  });
});
