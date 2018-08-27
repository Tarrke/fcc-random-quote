#!/usr/bin/env python3
# coding: utf-8

"""
Simple script that gets quotes from web sites and construct a Quote.js file:
http://www.notable-quotes.com/s/star_wars_quotes.html
http://www.notable-quotes.com/s/star_wars_quotes_ii.html
http://www.notable-quotes.com/s/star_wars_quotes_iii.html
http://www.notable-quotes.com/s/star_wars_quotes_iv.html
"""

import urllib
import bs4 as bs
import shutil
import io

def download_file(url, file_name):
    """Download a file from an url an record it on the disk."""
    request = urllib.request.Request(url) #pylint: disable=E1101
    request.add_header('User-Agent', 'Mozilla/5.0 (Windows; U; Windows NT 5.1; it; rv:1.8.1.11) Gecko/20071127 Firefox/2.0.0.11')
    with urllib.request.urlopen(request) as response, open(file_name, 'wb') as out_file: #pylint: disable=E1101
        shutil.copyfileobj(response, out_file)
    return out_file

urls = ['http://www.notable-quotes.com/s/star_wars_quotes.html',
'http://www.notable-quotes.com/s/star_wars_quotes_ii.html',
'http://www.notable-quotes.com/s/star_wars_quotes_iii.html',
'http://www.notable-quotes.com/s/star_wars_quotes_iv.html']

out = io.open('src/Quotes.js', 'w')
out.write('export default {')
out.write('quotes: [')

for url in urls:
    download_file(url, '.dl.html')
    html = open('.dl.html').read()
    soup = bs.BeautifulSoup(html, 'lxml')
    data = soup.find('div', attrs={'class':'row body'})
    for item in data.find_all('p', attrs={'class': 'subtit'}):
        item.extract()
    for item in data.find_all('p', attrs={'class': 'lkcounter'}):
        item.extract()
    for item in data.find_all('p', attrs={'class': 'lnktags'}):
        item.extract()
    tab = data.find_all('p')
    i = 0
    while( i < len(tab) ):
        quote = tab[i].text.replace('"', '\\"')
        author = tab[i+1].text.split(',')[0].title()
        print(quote, '--', author)
        s = '{ quote: "' + quote + '", author: "' + author + '" },'
        out.write(s)
        i += 2

out.write("]")
out.write("};")