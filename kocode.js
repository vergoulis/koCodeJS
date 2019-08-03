/* Copyright (C) 2019 Thanasis Vergoulis
 *
 * This code is a free software: you can redistribute it and/or modify 
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This code is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 * Contact email: vergoulis@athenarc.gr
 */

var pressed_keys = new Array(); //The last pressed keys.
var konami_keys = new Array(38,38,40,40,37,39,37,39,66,65); //The keys of konami code.
var cur_key_indicator = 0; //An indicator pointing to the current key.

/** 
 * Listening for ... the konami code!! :-)
 */
function konami_code(e)
{
	var KeyID = (window.event) ? event.keyCode : e.keyCode;

	if( KeyID == konami_keys[cur_key_indicator] )
	{
		cur_key_indicator = cur_key_indicator+1;
	}
	else
	{
		cur_key_indicator = 0;
	}
	if( cur_key_indicator == 10)
	{
		//PLACE YOUR PAGE-SPECIFIC CODE HERE! a simple example follows
		alert("Easter egg!"); 
	}
}