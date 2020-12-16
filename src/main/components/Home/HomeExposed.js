/**
 * Copyright (c) 2020 INESC TEC <https://www.inesctec.pt>
 *
 * This Source Code Form is subject to the terms of the European Union
 * Public License, v. 1.2. If a copy of the EUPL was not distributed with
 * this file, You can obtain one at https://opensource.org/licenses/EUPL-1.2.
 *
 * SPDX-License-Identifier: EUPL-1.2
 */

import React from 'react';

import { ThemeConsumer } from '@app/contexts/Theme';

import Template from '@main/components/Home/Template';
import { getThemedImage } from '@app/common/assets/images';

import i18n from '@app/services/i18n';

export default function HomeExposed (props) {
  const header = i18n.translate('screens.home.exposed.title');
  const description = i18n.translate('screens.home.exposed.description');

  return (
    <ThemeConsumer>
      {({name, colors}) => (
        <Template
          header={header}
          description={description}
          image={getThemedImage('exposed', name)}
          panelBackgroundColor={colors.panelYellowBackgroundColor}
          panelTextColor={colors.panelYellowTextColor}
          {...props}
        />
      )}
    </ThemeConsumer>
  );
}
