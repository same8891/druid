/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { SqlQuery } from '@druid-toolkit/query';
import { render } from '@testing-library/react';
import React from 'react';

import { ComplexMenuItems } from './complex-menu-items';

describe('ComplexMenuItems', () => {
  it('matches snapshot when menu is opened for column not inside group by', () => {
    const numberMenu = (
      <ComplexMenuItems
        schema="schema"
        table="table"
        columnName="user_theta"
        columnType="COMPLEX<thetaSketch>"
        parsedQuery={SqlQuery.parse(`SELECT channel, count(*) as cnt FROM wikipedia GROUP BY 1`)}
        onQueryChange={() => {}}
      />
    );

    const { container } = render(numberMenu);
    expect(container).toMatchSnapshot();
  });
});