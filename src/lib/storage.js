/*!
 * Chameleon
 *
 * Copyright 2014 fixanoid.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 */

// TODO: using storage permission may be an overkill -- localStorage should be enuf?
var storage = chrome.storage.local;

function get(key, callback) {
	storage.get(key, callback);
}

function set(o) {
	storage.set(o);
}

module.exports.set = set;
module.exports.get = get;